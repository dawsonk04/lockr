import React from 'react';
import Image from 'next/image';
import qrCodeImage from '../img/lockr-placeholder.png';

export default function Download() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 leading-tight">
              Take Lockr With You
            </h2>
            <h3 className="text-xl text-emerald-600 font-medium">
              Secure access anytime, anywhere.
            </h3>
            <p className="text-lg text-gray-600 md:pr-12">
              Download the iOS app to access your encrypted passwords wherever you go.
              Fast, secure, and built for mobile-first peace of mind.
            </p>
            
            <div className="py-4">
              <a href="#" className="inline-block bg-black text-white px-6 py-3 rounded-lg transition-all hover:bg-gray-800 hover:scale-105 duration-300 flex items-center">
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
              </a>
            </div>
            
            <div className="flex items-center text-emerald-700 text-sm font-medium">
              <span className="mr-2">🔒</span>
              <span>End-to-end encrypted | iOS only</span>
            </div>
          </div>
          
          {/* Right side - QR code only */}
          <div className="flex-1 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-emerald-100 transition-all duration-300 hover:shadow-md hover:scale-105">
              <div className="relative w-64 h-64">
                <Image
                  src={qrCodeImage}
                  alt="Download QR Code"
                  fill
                  className="rounded-lg object-contain"
                  priority
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">Scan to download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 