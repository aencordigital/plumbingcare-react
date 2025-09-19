import React from 'react';

const services = {
  emergency: {
    name: 'Emergency Services',
    icon: 'fa-exclamation-triangle',
    color: 'red',
    items: ['Burst Pipe Repair', 'Flood Control', 'Sewer Backup', 'Gas Leak Repair'],
  },
  installation: {
    name: 'Installation & Repair',
    icon: 'fa-tools',
    color: 'blue',
    items: ['Faucet Installation', 'Toilet Repair', 'Pipe Replacement', 'Shower Systems'],
  },
  maintenance: {
    name: 'Maintenance',
    icon: 'fa-wrench',
    color: 'green',
    items: ['Drain Cleaning', 'Water Heater Flush', 'Leak Detection', 'Pipe Insulation'],
  },
  waterHeater: {
    name: 'Water Heaters',
    icon: 'fa-thermometer-half',
    color: 'orange',
    items: ['Tankless Heaters', 'Heater Repair', 'Installation', 'Maintenance'],
  },
  drain: {
    name: 'Drain Cleaning',
    icon: 'fa-tint',
    color: 'purple',
    items: ['Clog Removal', 'Hydro Jetting', 'Sewer Line Cleaning', 'Drain Maintenance'],
  },
  commercial: {
    name: 'Commercial Plumbing',
    icon: 'fa-building',
    color: 'gray',
    items: ['Large Scale Repairs', 'Plumbing Design', 'Backflow Testing', 'System Upgrades'],
  },
};

const Home = ({ isLoggedIn, setShowAuthModal, setIsLoginMode }) => {
  if (isLoggedIn) return null;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Plumbing Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional plumbing services for homes and businesses. 24/7 emergency service available.
        </p>
        <div className="mt-8">
          <button
            onClick={() => {
              setShowAuthModal(true);
              setIsLoginMode(false);
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition shadow hover:shadow-md"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Plumbing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(services).slice(0, 6).map(([categoryId, categoryData]) => (
            <div
              key={categoryId}
              className={`bg-${categoryData.color}-50 border border-${categoryData.color}-200 rounded-xl p-6 service-card`}
            >
              <div
                className={`w-16 h-16 bg-${categoryData.color}-100 rounded-lg flex items-center justify-center mb-4`}
              >
                <i className={`fas ${categoryData.icon} text-2xl text-${categoryData.color}-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{categoryData.name}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {categoryData.items.slice(0, 3).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
                <li>• And more...</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setShowAuthModal(true);
              setIsLoginMode(true);
            }}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Login to view all services →
          </button>
        </div>
      </section>

      {/* AI Features Preview */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">AI-Powered Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">AI Customer Engagement</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-arrow-up mr-2"></i>
                <span>Upsell relevant services</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-sync-alt mr-2"></i>
                <span>Subscription renewals</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-user-friends mr-2"></i>
                <span>Referral requests</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-star mr-2"></i>
                <span>Review solicitation</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">AI Appointment Setting</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>Automated call scheduling</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>Calendar integration</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>Service reminders</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;