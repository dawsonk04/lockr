import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left section with text */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl text-black font-bold leading-tight">
              Secure Your Digital Life with Lockr
            </h1>
            <p className="text-lg text-black md:pr-12">
              The all-in-one password management solution that keeps your credentials safe and accessible wherever you go.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link 
                href="/get-started" 
                className="px-6 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/learn-more" 
                className="px-6 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right section with image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md h-[400px]">
              <Image
                src="/hero-image.jpg"
                alt="Lockr App"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 