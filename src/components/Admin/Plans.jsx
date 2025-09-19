import React from 'react';

const businessPlans = [
  {
    name: 'Starter',
    price: '$49/mo',
    features: ['3 Users', 'Basic Analytics', 'Standard Support', '10 Monthly Bookings'],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$149/mo',
    features: ['10 Users', 'Advanced Analytics', 'Priority Support', 'Unlimited Bookings', 'AI Tools'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$349/mo',
    features: ['Unlimited Users', 'Custom Analytics', '24/7 Support', 'Dedicated Manager', 'API Access'],
    popular: false,
  },
];

const Plans = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Upgrade Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {businessPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border p-6 ${plan.popular ? 'border-blue-500 ring-2 ring-blue-200 transform scale-105' : 'border-gray-200'} relative`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                RECOMMENDED
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 text-center">{plan.name}</h3>
            <div className="text-3xl font-bold text-blue-600 my-4 text-center">{plan.price}</div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Upgrade Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;