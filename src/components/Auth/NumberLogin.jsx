import React from 'react';

const NumberLogin = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Number Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Send Verification Code
        </button>
      </form>
    </section>
  );
};

export default NumberLogin;