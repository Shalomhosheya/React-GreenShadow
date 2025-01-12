import React from 'react';
import { NavLink } from 'react-router-dom';
import FieldPage from '../Pages/FieldPage';

function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <h2>Green Shadow 🟢</h2>
      <nav className="sidebar-nav">
        <NavLink to="/Dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/FieldPage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Field
        </NavLink>
        <NavLink to="/staff" className={({ isActive }) => (isActive ? 'active' : '')}>
          Staff
        </NavLink>
        <NavLink to="/vehicle" className={({ isActive }) => (isActive ? 'active' : '')}>
          Vehicle
        </NavLink>
        <NavLink to="/reservation" className={({ isActive }) => (isActive ? 'active' : '')}>
          Reservation
        </NavLink>
        <NavLink to="/crops" className={({ isActive }) => (isActive ? 'active' : '')}>
          Crops
        </NavLink>
        <NavLink to="/equipment" className={({ isActive }) => (isActive ? 'active' : '')}>
          Equipment
        </NavLink>
        <NavLink to="/equipment-detail" className={({ isActive }) => (isActive ? 'active' : '')}>
          Equipment Detail
        </NavLink>
        <NavLink to="/monitoring-log" className={({ isActive }) => (isActive ? 'active' : '')}>
          Monitoring Log
        </NavLink>
        <button id="logoutBtn" style={{ width: '13rem' }}>
          Log Out
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
