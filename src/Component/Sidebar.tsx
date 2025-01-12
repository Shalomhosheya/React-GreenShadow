import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens)
    navigate('/'); // Redirect to LoginPage after logout
  };

  return (
    <aside className="sidebar" id="sidebar">
      <h2>Green Shadow 🟢</h2>
      <nav className="sidebar-nav">
        {/* Navigation Links */}
        <NavLink to="/Dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/FieldPage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Field
        </NavLink>
        <NavLink to="/StaffPage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Staff
        </NavLink>
        <NavLink to="/VehiclePage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Vehicle
        </NavLink>
        <NavLink to="/ReservationPage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Reservation
        </NavLink>
        <NavLink to="/CropPage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Crops
        </NavLink>
        <NavLink to="/EquipmentPage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Equipment
        </NavLink>
        <NavLink to="/EquipmentDetailPage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Equipment Detail
        </NavLink>
        <NavLink to="/MonitoringLogPage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Monitoring Log
        </NavLink>

        {/* Log Out Button */}
        <button
          id="logoutBtn"
          style={{ width: '13rem' }}
          onClick={handleLogout}
        >
          Log Out
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
