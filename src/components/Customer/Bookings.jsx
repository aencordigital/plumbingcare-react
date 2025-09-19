import React from 'react';

const bookings = [
  { id: 1, date: '2025-09-20', service: 'Faucet Installation', technician: 'Mike Johnson', status: 'Pending' },
  { id: 2, date: '2025-09-22', service: 'Water Heater Repair', technician: 'Sarah Brown', status: 'Confirmed' },
];

const Bookings = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Your Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Service</th>
              <th className="py-2 px-4 text-left">Technician</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="py-2 px-4">{booking.date}</td>
                <td className="py-2 px-4">{booking.service}</td>
                <td className="py-2 px-4">{booking.technician}</td>
                <td className="py-2 px-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">{booking.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Bookings;