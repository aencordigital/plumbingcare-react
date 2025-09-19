import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceHistory from './ServiceHistory.jsx'; // Corrected path
import Bookings from './Bookings.jsx'; // Corrected path
import Tracking from './Tracking.jsx'; // Corrected path
import Subscription from '../Subscription.jsx'; // Adjust if in a different directory
import BookNow from './BookNow.jsx'; // Corrected path
import ScheduledServices from './ScheduledServices.jsx'; // Corrected path
import Referrals from './Referrals.jsx'; // Corrected path
import Emergency from './Emergency.jsx'; // Corrected path

const CustomerDashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) return null;

  return (
    <Routes>
      <Route path="/history" element={<ServiceHistory />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/scheduled" element={<ScheduledServices />} />
      <Route path="/referrals" element={<Referrals />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/" element={<ServiceHistory />} /> // Default to history
    </Routes>
  );
};

export default CustomerDashboard;