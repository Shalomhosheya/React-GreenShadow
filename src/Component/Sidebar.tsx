import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <h2>Green Shadow 🟢</h2>
      <nav className="sidebar-nav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="field.html">Field</a>
        <a href="staffPage.html">Staff</a>
        <a href="vehicle.html">Vehicle</a>
        <a href="reservation.html">Reservation</a>
        <a href="crop.html">Crops</a>
        <a href="equipMent.html">Equipment</a>
        <a href="equipmentDetail.html">Equipment Detail</a>
        <a href="monitoringLog.html">Monitoring Log</a>
        <button id="logoutBtn" style={{ width: '13rem' }}>
          Log Out
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
