import Link from 'next/link';
import LeadershipSection from '@/components/LeadershipSection';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{position: 'relative', overflow: 'hidden'}}>
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" style={{position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))'}}></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20" style={{position: 'absolute', top: '-6rem', left: '50%', transform: 'translateX(-50%)', width: '24rem', height: '24rem', background: 'linear-gradient(90deg, #60a5fa, #a855f7)', borderRadius: '50%', filter: 'blur(48px)', opacity: 0.2}}></div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8" style={{position: 'relative', maxWidth: '80rem', margin: '0 auto', padding: '6rem 1rem'}}>
          <div className="text-center">
            <div className="mb-8" style={{marginBottom: '2rem'}}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200" style={{display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500', backgroundColor: '#dbeafe', color: '#1e40af', border: '1px solid #bfdbfe'}}>
                ✨ Modern Web Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" style={{fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: '900', color: '#111827', marginBottom: '1.5rem', lineHeight: '1.1'}}>
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{background: 'linear-gradient(90deg, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                NEA Website
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed" style={{marginTop: '1.5rem', maxWidth: '48rem', margin: '0 auto', fontSize: '1.25rem', color: '#4b5563', lineHeight: '1.75'}}>
              A cutting-edge platform built with Next.js and PostgreSQL, featuring a beautiful modern UI, 
              robust functionality, and seamless user experience.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center" style={{marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{display: 'inline-flex', alignItems: 'center', padding: '1rem 2rem', background: 'linear-gradient(90deg, #2563eb, #9333ea)', color: 'white', fontWeight: '600', borderRadius: '9999px', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'}}
              >
                Get Started Free
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
                style={{display: 'inline-flex', alignItems: 'center', padding: '1rem 2rem', backgroundColor: 'white', color: '#374151', fontWeight: '600', borderRadius: '9999px', border: '2px solid #e5e7eb', textDecoration: 'none', transition: 'all 0.3s ease'}}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-24 bg-white" style={{padding: '6rem 0', backgroundColor: 'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 1rem'}}>
          <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{fontSize: '2.25rem', fontWeight: '700', color: '#111827', marginBottom: '1rem'}}>
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{fontSize: '1.25rem', color: '#4b5563', maxWidth: '42rem', margin: '0 auto'}}>
              Driving excellence and innovation in our professional community
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem'}}>
            {/* Mission */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2" style={{background: 'linear-gradient(135deg, #eff6ff, #eef2ff)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', border: '1px solid #dbeafe', transition: 'all 0.3s ease'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6" style={{width: '4rem', height: '4rem', background: 'linear-gradient(90deg, #3b82f6, #2563eb)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '2rem', height: '2rem', color: 'white'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '1rem'}}>Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg" style={{color: '#374151', lineHeight: '1.75', fontSize: '1.125rem'}}>
                To foster professional excellence, promote knowledge sharing, and create meaningful connections among our members while advancing industry standards and best practices for the benefit of our community and society.
              </p>
            </div>
            
            {/* Vision */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-2" style={{background: 'linear-gradient(135deg, #faf5ff, #fdf2f8)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', border: '1px solid #e9d5ff', transition: 'all 0.3s ease'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6" style={{width: '4rem', height: '4rem', background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '2rem', height: '2rem', color: 'white'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '1rem'}}>Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg" style={{color: '#374151', lineHeight: '1.75', fontSize: '1.125rem'}}>
                To be the leading professional association that empowers members to achieve their highest potential, drives innovation in our field, and serves as a trusted voice for positive change in our industry and communities.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16" style={{marginTop: '4rem'}}>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8" style={{fontSize: '1.5rem', fontWeight: '700', color: '#111827', textAlign: 'center', marginBottom: '2rem'}}>
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100" style={{textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)', borderRadius: '0.75rem', border: '1px solid #dcfce7'}}>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4" style={{width: '3rem', height: '3rem', background: 'linear-gradient(90deg, #10b981, #059669)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginBottom: '1rem'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '1.5rem', height: '1.5rem', color: 'white'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem'}}>Excellence</h4>
                <p className="text-gray-600" style={{color: '#4b5563'}}>Striving for the highest standards in everything we do</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100" style={{textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #fff7ed, #fffbeb)', borderRadius: '0.75rem', border: '1px solid #fed7aa'}}>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4" style={{width: '3rem', height: '3rem', background: 'linear-gradient(90deg, #f97316, #ea580c)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginBottom: '1rem'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '1.5rem', height: '1.5rem', color: 'white'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem'}}>Collaboration</h4>
                <p className="text-gray-600" style={{color: '#4b5563'}}>Building strong partnerships and fostering teamwork</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100" style={{textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #ecfeff, #eff6ff)', borderRadius: '0.75rem', border: '1px solid #a5f3fc'}}>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4" style={{width: '3rem', height: '3rem', background: 'linear-gradient(90deg, #06b6d4, #0891b2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginBottom: '1rem'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '1.5rem', height: '1.5rem', color: 'white'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem'}}>Innovation</h4>
                <p className="text-gray-600" style={{color: '#4b5563'}}>Embracing new ideas and driving positive change</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <LeadershipSection />
    </div>
  );
} 