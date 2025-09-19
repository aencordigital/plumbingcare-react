import React from 'react';

const subscriptionPlans = [
  {
    name: 'Basic',
    price: '$29/mo',
    features: ['1 User', 'Basic Support', 'Standard Features', '5 Monthly Bookings'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$99/mo',
    features: ['5 Users', 'Priority Support', 'Advanced Features', 'Unlimited Bookings', 'AI Engagement'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$249/mo',
    features: ['Unlimited Users', '24/7 Support', 'Custom Features', 'Dedicated Manager', 'API Access'],
    popular: false,
  },
];

const Subscription = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Subscription Plans</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        Choose the plan that works best for your business. All plans include our AI customer engagement features.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border p-6 ${plan.popular ? 'border-blue-500 ring-2 ring-blue-200 transform scale-105' : 'border-gray-200'} relative`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
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
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscription;