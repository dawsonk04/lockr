import React from 'react';

export default function UseCase() {
  const useCases = [
    {
      icon: '💼',
      title: 'Professionals',
      description: 'Store work logins, secure documents, and 2FA codes across devices without missing a beat.'
    },
    {
      icon: '🎓',
      title: 'Students',
      description: 'Keep track of class portals, learning platforms, and app credentials all in one place.'
    },
    {
      icon: '🧑‍💻',
      title: 'Freelancers & Creators',
      description: 'Organize multiple client accounts, payment platforms, and creative tools securely.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Everyday Users',
      description: 'Simplify your online life — from shopping sites to streaming services, manage it all without stress.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
            <span className="inline-block mr-3">🔍</span> 
            Use Cases
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto italic">
            "Designed for real life. Wherever and however you manage your digital world, Lockr's got your back."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
              <div className="flex items-start">
                <span className="text-4xl mr-6">{useCase.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-emerald-100 pt-8 text-center">
          <p className="text-emerald-500 text-lg font-medium">
            Secure, simple, and designed for the way you work.
          </p>
        </div>
      </div>
    </section>
  );
} 