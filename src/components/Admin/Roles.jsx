import React from 'react';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'customer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'technician' },
];

const Roles = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Assign Roles</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Current Role</th>
              <th className="py-2 px-4 text-left">New Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.role === 'admin'
                        ? 'bg-red-100 text-red-800'
                        : user.role === 'technician'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <select defaultValue={user.role} className="p-2 border rounded text-sm">
                    <option value="admin">Admin</option>
                    <option value="technician">Technician</option>
                    <option value="customer">Customer</option>
                    <option value="affiliate">Affiliate</option>
                  </select>
                </td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm mr-2">Update</button>
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

export default Roles;