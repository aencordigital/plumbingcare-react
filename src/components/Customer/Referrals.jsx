import React from 'react';

const referralHistory = [
  { id: 1, date: '2025-09-01', name: 'Alice Smith', service: 'Pipe Repair', earnings: 25, status: 'Paid' },
  { id: 2, date: '2025-09-05', name: 'Bob Johnson', service: 'Drain Cleaning', earnings: 25, status: 'Pending' },
];

const Referrals = () => {
  const referralLink = 'https://plumbingcare.com/ref/12345';
  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied!');
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Referral Program</h2>
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-2">Your Referral Link</h3>
        <div className="flex items-center mb-4">
          <input type="text" value={referralLink} className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg" readOnly />
          <button onClick={copyReferralLink} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg">
            Copy
          </button>
        </div>
        <p className="text-sm text-gray-600">Share this link with friends and earn $25 for each successful referral!</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Your Earnings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-800">Total Earnings</p>
            <p className="text-2xl font-semibold">$125</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">Successful Referrals</p>
            <p className="text-2xl font-semibold">5</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">Pending Referrals</p>
            <p className="text-2xl font-semibold">2</p>
          </div>
        </div>
        <h4 className="font-semibold mb-2">Referral History</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Referral</th>
                <th className="py-2 px-4 text-left">Service</th>
                <th className="py-2 px-4 text-left">Earnings</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {referralHistory.map((referral) => (
                <tr key={referral.id} className="border-b">
                  <td className="py-2 px-4">{referral.date}</td>
                  <td className="py-2 px-4">{referral.name}</td>
                  <td className="py-2 px-4">{referral.service}</td>
                  <td className="py-2 px-4">${referral.earnings}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        referral.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {referral.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Referrals;