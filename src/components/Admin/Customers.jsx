import React from 'react';

const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', subscription: 'Pro', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', subscription: 'Basic', status: 'Emergency' },
];

const Customers = () => {
  const viewCustomer = (customer) => {
    alert(`Viewing customer: ${customer.name}`);
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Customers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Customer</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Subscription</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="py-2 px-4">{customer.name}</td>
                <td className="py-2 px-4">{customer.email}</td>
                <td className="py-2 px-4">{customer.subscription}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      customer.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : customer.status === 'Emergency'
                        ? 'bg-red-100 text-red-800 emergency-blink'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button onClick={() => viewCustomer(customer)} className="text-blue-600 hover:text-blue-800 text-sm mr-2">
                    View
                  </button>
                  <button className="text-green-600 hover:text-green-800 text-sm mr-2">Contact</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Customers;