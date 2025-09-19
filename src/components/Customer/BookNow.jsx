import React from 'react';

const servicesList = [
  { id: 1, name: 'Pipe Repair', price: 150 },
  { id: 2, name: 'Drain Cleaning', price: 100 },
  { id: 3, name: 'Faucet Installation', price: 200 },
];

const BookNow = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Book a Service</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Service</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Choose a service</option>
              {servicesList.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name} - ${service.price}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service Details</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Please describe the issue in detail..."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date & Time</label>
            <input
              type="datetime-local"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Information</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
              placeholder="Email Address"
            />
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
              placeholder="Street Address"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="City"
              />
              <input
                type="text"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ZIP Code"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-between pt-6 border-t border-gray-200">
          <button
            type="button"
            className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition flex items-center"
          >
            <i className="fas fa-calendar-check mr-2"></i> Book Service
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookNow;