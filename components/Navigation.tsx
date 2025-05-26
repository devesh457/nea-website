'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const { data: session, status } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminRole = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch('/api/user/me');
          if (response.ok) {
            const user = await response.json();
            setIsAdmin(user.role === 'ADMIN');
          }
        } catch (error) {
          console.error('Error checking admin role:', error);
        }
      }
    };

    if (session) {
      checkAdminRole();
    } else {
      setIsAdmin(false);
    }
  }, [session]);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(229, 231, 235, 0.5)', position: 'sticky', top: 0, zIndex: 50}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 1rem'}}>
        <div className="flex justify-between h-16" style={{display: 'flex', justifyContent: 'space-between', height: '4rem', alignItems: 'center'}}>
          <div className="flex items-center" style={{display: 'flex', alignItems: 'center'}}>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{fontSize: '1.75rem', fontWeight: '800', background: 'linear-gradient(90deg, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none'}}>
              NEA Website
            </Link>
          </div>
          <div className="flex items-center space-x-4" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <Link href="/governing-body" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" style={{color: '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}>
              Leadership
            </Link>
            
            {status === 'loading' ? (
              <div className="text-gray-500">Loading...</div>
            ) : session ? (
              // Authenticated user navigation
              <>
                {isAdmin ? (
                  <Link href="/admin" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" style={{color: '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}>
                    Admin Dashboard
                  </Link>
                ) : (
                  <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" style={{color: '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}>
                    Dashboard
                  </Link>
                )}
                <span className="text-gray-600 text-sm">Welcome, {session.user?.name}</span>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="bg-red-500/10 hover:bg-red-500/20 text-red-600 px-4 py-2 rounded-full font-medium transition-all duration-200"
                  style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#dc2626', padding: '0.5rem 1rem', borderRadius: '9999px', fontWeight: '500', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease'}}
                >
                  Sign Out
                </button>
              </>
            ) : (
              // Unauthenticated user navigation
              <>
                <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" style={{color: '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}>
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
                  style={{background: 'linear-gradient(90deg, #2563eb, #9333ea)', color: 'white', padding: '0.625rem 1.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: '500', transition: 'all 0.2s ease', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 