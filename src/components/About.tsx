import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-emerald-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-8">About Lockr</h2>
        
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Lockr is built for simplicity, security, and peace of mind. We use advanced cryptography 
            to store your passwords safely — so you never have to worry about forgetting a login again. 
            Whether you're at home or on the go, your credentials stay encrypted, synced, and in your control.
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-emerald-600 text-xl mb-2">Simplicity</h3>
              <p className="text-gray-600">Easy to use interface for managing all your passwords in one place.</p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-emerald-600 text-xl mb-2">Security</h3>
              <p className="text-gray-600">Advanced encryption keeps your data safe from prying eyes.</p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-emerald-600 text-xl mb-2">Peace of Mind</h3>
              <p className="text-gray-600">Never worry about forgetting your credentials again.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 