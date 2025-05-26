import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding admin user and availability data...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@nea.org' },
    update: {},
    create: {
      email: 'admin@nea.org',
      name: 'NEA Administrator',
      password: adminPassword,
      phone: '+91-9876543210',
      designation: 'System Administrator',
      posting: 'NEA Headquarters',
      role: 'ADMIN',
      isApproved: true,
      approvedAt: new Date(),
    },
  });

  console.log('✅ Admin user created:', admin.email);

  // Create guest house availability data
  const availabilityData = [
    {
      guestHouse: 'NEA Delhi Guest House',
      location: 'New Delhi',
      roomType: 'Single',
      totalRooms: 20,
      availableRooms: 18,
      pricePerNight: 1500.00,
      amenities: JSON.stringify(['WiFi', 'AC', 'TV', 'Breakfast']),
      isActive: true,
    },
    {
      guestHouse: 'NEA Delhi Guest House',
      location: 'New Delhi',
      roomType: 'Double',
      totalRooms: 15,
      availableRooms: 12,
      pricePerNight: 2500.00,
      amenities: JSON.stringify(['WiFi', 'AC', 'TV', 'Breakfast', 'Mini Bar']),
      isActive: true,
    },
    {
      guestHouse: 'NEA Mumbai Guest House',
      location: 'Mumbai',
      roomType: 'Single',
      totalRooms: 25,
      availableRooms: 20,
      pricePerNight: 1800.00,
      amenities: JSON.stringify(['WiFi', 'AC', 'TV', 'Breakfast']),
      isActive: true,
    },
    {
      guestHouse: 'NEA Mumbai Guest House',
      location: 'Mumbai',
      roomType: 'Suite',
      totalRooms: 8,
      availableRooms: 6,
      pricePerNight: 4000.00,
      amenities: JSON.stringify(['WiFi', 'AC', 'TV', 'Breakfast', 'Mini Bar', 'Balcony']),
      isActive: true,
    },
    {
      guestHouse: 'NEA Kolkata Guest House',
      location: 'Kolkata',
      roomType: 'Single',
      totalRooms: 18,
      availableRooms: 15,
      pricePerNight: 1400.00,
      amenities: JSON.stringify(['WiFi', 'AC', 'TV', 'Breakfast']),
      isActive: true,
    },
    {
      guestHouse: 'NEA Chennai Guest House',
      location: 'Chennai',
      roomType: 'Double',
      totalRooms: 12,
      availableRooms: 10,
      pricePerNight: 2200.00,
      amenities: JSON.stringify(['WiFi', 'AC', 'TV', 'Breakfast']),
      isActive: true,
    },
    {
      guestHouse: 'NEA Bangalore Guest House',
      location: 'Bangalore',
      roomType: 'Single',
      totalRooms: 22,
      availableRooms: 18,
      pricePerNight: 1600.00,
      amenities: JSON.stringify(['WiFi', 'AC', 'TV', 'Breakfast']),
      isActive: true,
    },
  ];

  for (const availability of availabilityData) {
    await prisma.guestHouseAvailability.upsert({
      where: {
        guestHouse_roomType: {
          guestHouse: availability.guestHouse,
          roomType: availability.roomType,
        },
      },
      update: availability,
      create: availability,
    });
  }

  console.log('✅ Guest house availability data seeded');

  // Update existing test user to be approved
  await prisma.user.updateMany({
    where: { email: 'test@nea.org' },
    data: {
      isApproved: true,
      approvedBy: admin.id,
      approvedAt: new Date(),
    },
  });

  console.log('✅ Test user approved');
  console.log('🎉 Seeding completed!');
  console.log('');
  console.log('Admin credentials:');
  console.log('Email: admin@nea.org');
  console.log('Password: admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 