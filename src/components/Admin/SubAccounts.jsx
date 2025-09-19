import React from 'react';

const SubAccounts = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Add Sub Account</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Create password"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="technician">Technician</option>
              <option value="dispatcher">Dispatcher</option>
              <option value="customer_service">Customer Service</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Permissions</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="perm1"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="perm1" className="ml-2 block text-sm text-gray-700">View appointments</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="perm2"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="perm2" className="ml-2 block text-sm text-gray-700">Manage appointments</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="perm3"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="perm3" className="ml-2 block text-sm text-gray-700">View customers</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="perm4"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="perm4" className="ml-2 block text-sm text-gray-700">Manage customers</label>
              </div>
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
            <i className="fas fa-user-plus mr-2"></i> Create Sub Account
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubAccounts;