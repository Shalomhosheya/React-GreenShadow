import React, { useEffect } from 'react';
import Sidebar from '../Component/Sidebar';
import AccountDetails from '../Component/AccountDetail';

function Dashboard() {
  // useEffect(() => {
  //   // Example: Setting up the pie chart using Chart.js or other library
  //   const createPieChart = () => {
  //     // const ctx = document.getElementById('overviewPieChart').getContext('2d');
  //     new Chart(ctx, {
  //       type: 'pie',
  //       data: {
  //         labels: ['Staff', 'Reservation', 'Crops', 'Equipment', 'Vehicles'],
  //         datasets: [
  //           {
  //             data: [5, 6, 8, 10, 3], // Example numbers, replace with actual data
  //             backgroundColor: [
  //               '#FF6384',
  //               '#36A2EB',
  //               '#FFCE56',
  //               '#4BC0C0',
  //               '#9966FF',
  //             ],
  //             hoverBackgroundColor: [
  //               '#FF6384',
  //               '#36A2EB',
  //               '#FFCE56',
  //               '#4BC0C0',
  //               '#9966FF',
  //             ],
  //           },
  //         ],
  //       },
  //       options: {
  //         responsive: true,
  //         plugins: {
  //           legend: {
  //             position: 'bottom',
  //           },
  //         },
  //       },
  //     });
  //   };

  //   createPieChart();
  // }, []);

  return (
    <>
    <body>
      <AccountDetails/>
    <div className='dashboard-container'>

<Sidebar/>
<main className="content">
   <header className="content-header anim1">
     <br />
     <br />
     <h1>Welcome to Green Shadow 🍏</h1>
     <p style={{ shapeMargin: '50px' }}>Dashboard</p>
   </header>
   <br />
   <br />
   <section className="content-overview anim1">
     <div className="overview-box">
       <h3>Total Staff</h3>
       <p id="member">5</p>
     </div>
     <div className="overview-box">
       <h3>Active Reservation</h3>
       <p id="reservation1">6</p>
     </div>
     <div className="overview-box">
       <h3>Total Crops</h3>
       <p id="crops">8</p>
     </div>
     <div className="overview-box">
       <h3>Equipment Availability</h3>
       <p id="equip">10</p>
     </div>
     <div className="overview-box">
       <h3>Vehicle Availability</h3>
       <p id="vehicle">3</p>
     </div>
   </section>

   <section className="content-data anim1">
     <h2>Recent Activity</h2>
     <p>
       This section can be used for charts, recent data entries, and other
       analytics.
     </p>
     <div className="piechart_space">
       <canvas id="overviewPieChart"></canvas>
     </div>
   </section>
   <br />

   <div className="card-body">
     <div
       className="card"
       style={{ paddingLeft: '30px', backgroundColor: 'black' }}
     >
       <h5 style={{ color: 'aqua' }}>
         A Crop Monitoring System Dashboard is an intuitive platform
         designed to help farmers and agronomists monitor crop health,
         growth, and environmental conditions in real time. <br />
         It integrates data from sensors, satellite imagery, and weather
         forecasts, providing visual insights such as soil moisture,
         temperature, crop stress levels, and pest detection. The dashboard
         enables proactive decision-making, enhancing productivity and
         sustainability.
       </h5>
     </div>
   </div>
 </main>
</div>
 

    </body>
         </>
  );
}

export default Dashboard;
