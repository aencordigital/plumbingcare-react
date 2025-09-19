import React from 'react';

const Header = ({ isLoggedIn, userName, handleLogout, setShowAuthModal, setIsLoginMode, handleDemoLogin, isDemoMode, setUserRole }) => {
  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PlumbingCare</h1>
              <p className="text-sm text-gray-600">Complete Professional Plumbing Services</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+15551234567"
              className="hidden md:flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
            >
              <span className="text-blue-600">📞</span>
              <span className="text-blue-800 font-semibold">(555) 123-4567</span>
            </a>

            {!isLoggedIn ? (
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsLoginMode(true);
                  }}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsLoginMode(false);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-2 rounded-lg transition shadow hover:shadow-md"
                >
                  Sign Up
                </button>
                <button
                  onClick={handleDemoLogin}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition shadow hover:shadow-md"
                >
                  Demo Login
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 hidden md:block">{userName}</span>
                {isDemoMode && (
                  <select
                    value={userRole}
                    onChange={handleRoleChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                    <option value="affiliate">Affiliate</option>
                  </select>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition shadow hover:shadow-md"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;