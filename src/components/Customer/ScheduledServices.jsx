import React from 'react';

const scheduledServices = [
  { id: 1, date: '2025-09-20', service: 'Faucet Installation', technician: 'Mike Johnson', status: 'Scheduled' },
  { id: 2, date: '2025-09-22', service: 'Water Heater Repair', technician: 'Sarah Brown', status: 'Scheduled' },
];

const ScheduledServices = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Scheduled Services</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Service</th>
              <th className="py-2 px-4 text-left">Technician</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {scheduledServices.map((service) => (
              <tr key={service.id} className="border-b">
                <td className="py-2 px-4">{service.date}</td>
                <td className="py-2 px-4">{service.service}</td>
                <td className="py-2 px-4">{service.technician}</td>
                <td className="py-2 px-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">{service.status}</span>
                </td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm mr-2">Reschedule</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ScheduledServices;