import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Personal',
      price: '$4.99',
      period: 'per month',
      description: 'Perfect for individuals who need secure password management.',
      features: [
        'Store unlimited passwords',
        'Access on up to 3 devices',
        'Secure password generator',
        'Encrypted vault storage',
      ],
      buttonText: 'Get Started',
      popular: false,
      bgColor: 'bg-white',
      borderColor: 'border-emerald-200',
    },
    {
      name: 'Business',
      price: '$9.99',
      period: 'per user/month',
      description: 'Ideal for teams and businesses with advanced security needs.',
      features: [
        'Everything in Personal',
        'Admin dashboard',
        'Team password sharing',
        'Priority support',
        'Advanced security reports',
      ],
      buttonText: 'Try Business',
      popular: true,
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-400',
    },
    {
      name: 'Student',
      price: '$1.99',
      period: 'per month',
      description: 'Special discount for verified students with all essential features.',
      features: [
        'Everything in Personal',
        'Student verification',
        '50% discount',
        'Access on up to 2 devices',
      ],
      buttonText: 'Verify as Student',
      popular: false,
      bgColor: 'bg-white',
      borderColor: 'border-emerald-200',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`rounded-2xl ${plan.bgColor} border-2 ${plan.borderColor} shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md ${plan.popular ? 'relative z-10 transform md:-translate-y-4' : ''}`}
            >
              {plan.popular && (
                <div className="bg-emerald-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/signup" 
                  className={`w-full block text-center py-3 px-4 rounded-full ${plan.popular ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'} transition-colors`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 