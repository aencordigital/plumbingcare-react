import React from 'react';

const technicians = [
  { id: 1, name: 'John Smith', specialty: 'Pipe Repair', assignment: '123 Main St', status: 'On Job' },
  { id: 2, name: 'Jane Doe', specialty: 'Drain Cleaning', assignment: 'None', status: 'Available' },
];

const Technicians = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Assigned Technicians</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Technician</th>
              <th className="py-2 px-4 text-left">Specialty</th>
              <th className="py-2 px-4 text-left">Current Assignment</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {technicians.map((tech) => (
              <tr key={tech.id} className="border-b">
                <td className="py-2 px-4">{tech.name}</td>
                <td className="py-2 px-4">{tech.specialty}</td>
                <td className="py-2 px-4">{tech.assignment || 'None'}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      tech.status === 'Available'
                        ? 'bg-green-100 text-green-800'
                        : tech.status === 'On Job'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {tech.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm mr-2">Assign</button>
                  <button className="text-green-600 hover:text-green-800 text-sm mr-2">View</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Technicians;