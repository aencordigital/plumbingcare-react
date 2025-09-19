import React from 'react';

const affiliates = [
  { id: 1, name: 'Alice Johnson', earnings: 100, referrals: 5 },
  { id: 2, name: 'Bob Smith', earnings: 45, referrals: 2 },
];

const Affiliate = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Affiliate Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="dashboard-card bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800">Total Commissions</h3>
          <p className="text-3xl font-bold">$1,245</p>
        </div>
        <div className="dashboard-card bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">Successful Referrals</h3>
          <p className="text-3xl font-bold">28</p>
        </div>
        <div className="dashboard-card bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800">Conversion Rate</h3>
          <p className="text-3xl font-bold">12.5%</p>
        </div>
        <div className="dashboard-card bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800">Pending Commissions</h3>
          <p className="text-3xl font-bold">$385</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Affiliate</th>
              <th className="py-2 px-4 text-left">Earnings</th>
              <th className="py-2 px-4 text-left">Referrals</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {affiliates.map((affiliate) => (
              <tr key={affiliate.id} className="border-b">
                <td className="py-2 px-4">{affiliate.name}</td>
                <td className="py-2 px-4">${affiliate.earnings}</td>
                <td className="py-2 px-4">{affiliate.referrals}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      affiliate.earnings >= 50 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {affiliate.earnings >= 50 ? 'Eligible for Payout' : 'Pending'}
                  </span>
                </td>
                <td className="py-2 px-4">
                  {affiliate.earnings >= 50 && (
                    <button className="text-green-600 hover:text-green-800 text-sm mr-2">Pay Now</button>
                  )}
                  <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Affiliate;