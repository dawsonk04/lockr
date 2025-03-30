import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-emerald-400">Lockr</h1>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          {['About', 'Pricing', 'Download', 'Use Case'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        
        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Link 
            href="/login" 
            className="px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
} 