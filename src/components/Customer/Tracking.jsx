import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const statusSteps = ['Scheduled', 'En Route', 'On Site', 'Completed'];
const currentStatusIndex = 1; // Example: En Route

const Tracking = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Technician Tracking</h2>
      <div className="map-container mb-6">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Technician: John Smith</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Service Status</h3>
        <div className="flex items-center justify-between mt-4">
          {statusSteps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentStatusIndex >= index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`mt-2 text-sm ${currentStatusIndex >= index ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracking;