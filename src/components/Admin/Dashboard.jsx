import React from 'react';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'customer', subscription: 'Pro' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', subscription: 'Enterprise' },
];
const appointments = [
  { id: 1, customer: 'John Doe', service: 'Pipe Repair', date: '2025-09-10', status: 'Completed' },
  { id: 2, customer: 'Jane Smith', service: 'Drain Cleaning', date: '2025-09-12', status: 'In Progress' },
];

const Dashboard = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="dashboard-card bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800">Total Users</h3>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>
        <div className="dashboard-card bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">Active Appointments</h3>
          <p className="text-3xl font-bold">{appointments.length}</p>
        </div>
        <div className="dashboard-card bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800">Premium Subscriptions</h3>
          <p className="text-3xl font-bold">{users.filter((u) => u.subscription === 'Premium').length}</p>
        </div>
        <div className="dashboard-card bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800">Admin Accounts</h3>
          <p className="text-3xl font-bold">{users.filter((u) => u.role === 'admin').length}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Appointments</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">Customer</th>
                  <th className="py-2 px-4 text-left">Service</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.slice(0, 5).map((appointment) => (
                  <tr key={appointment.id} className="border-b">
                    <td className="py-2 px-4">{appointment.customer}</td>
                    <td className="py-2 px-4">{appointment.service}</td>
                    <td className="py-2 px-4">{appointment.date}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          appointment.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : appointment.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Revenue Overview</h3>
          <div className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-chart-line text-3xl text-gray-400 mb-3"></i>
              <p className="text-gray-500">Revenue chart would be displayed here</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">Monthly Revenue</p>
              <p className="font-semibold">$12,458</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800">YTD Revenue</p>
              <p className="font-semibold">$98,326</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;