import React from 'react';

const serviceHistory = [
  { id: 1, date: '2025-09-10', service: 'Pipe Repair', technician: 'John Smith', status: 'Completed' },
  { id: 2, date: '2025-09-05', service: 'Drain Cleaning', technician: 'Jane Doe', status: 'Completed' },
];

const ServiceHistory = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Service History</h2>
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
            {serviceHistory.map((service) => (
              <tr key={service.id} className="border-b">
                <td className="py-2 px-4">{service.date}</td>
                <td className="py-2 px-4">{service.service}</td>
                <td className="py-2 px-4">{service.technician}</td>
                <td className="py-2 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">{service.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServiceHistory;