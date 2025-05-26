import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - List all active availability for users
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get query parameters for filtering
    const { searchParams } = new URL(request.url);
    const guestHouse = searchParams.get('guestHouse');
    const roomType = searchParams.get('roomType');

    let whereClause: any = {
      isActive: true,
      availableRooms: {
        gt: 0
      }
    };

    if (guestHouse) {
      whereClause.guestHouse = guestHouse;
    }

    if (roomType) {
      whereClause.roomType = roomType;
    }

    const availability = await prisma.guestHouseAvailability.findMany({
      where: whereClause,
      orderBy: [
        { guestHouse: 'asc' },
        { roomType: 'asc' }
      ],
      select: {
        id: true,
        guestHouse: true,
        location: true,
        roomType: true,
        totalRooms: true,
        availableRooms: true,
        pricePerNight: true,
        amenities: true
      }
    });

    return NextResponse.json(availability);
  } catch (error) {
    console.error('Error fetching availability:', error);
    return NextResponse.json(
      { error: 'Failed to fetch availability' },
      { status: 500 }
    );
  }
} 