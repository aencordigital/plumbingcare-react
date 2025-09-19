import React from 'react';

const Emergency = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Emergency Services</h2>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
            <i className="fas fa-exclamation-triangle text-2xl text-red-600"></i>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-800">24/7 Emergency Plumbing Services</h3>
            <p className="text-red-600">Available round the clock for urgent plumbing issues</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Emergency Hotline</h4>
            <p className="text-2xl font-bold text-red-600">(555) EMERGENCY</p>
            <p className="text-sm text-gray-600 mt-2">Call us anytime for immediate assistance</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Average Response Time</h4>
            <p className="text-2xl font-bold text-blue-600">45 minutes</p>
            <p className="text-sm text-gray-600 mt-2">Faster for premium subscribers</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition emergency-blink flex items-center justify-center mx-auto">
          <i className="fas fa-phone-alt mr-2"></i> Request Emergency Service
        </button>
      </div>
    </section>
  );
};

export default Emergency;