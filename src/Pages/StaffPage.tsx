import React from "react";
import Sidebar from "../Component/Sidebar"; // Assuming Sidebar is another component in your project
import AccountDetails from "../Component/AccountDetail";

function StaffPage() {
  return (
    <body>
      {/* Account Details Section */}
    <AccountDetails/>
      <div className="dashboard-container">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content */}
        <main className="content">
          <div className="class-body anim1">
            <h2 className="text-center">Staff Input</h2>
            <p>
              Staff ID: <label id="lbl2"></label>
            </p>
          </div>

          <br />

          {/* Input Form Section */}
          <div className="card mainContent anim1">
            <div className="card-body">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping1">
                  First Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  aria-label="First Name"
                  aria-describedby="addon-wrapping1"
                  id="staffName"
                />
              </div>

              <br />

              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping2">
                  Last Name
                </span>
                <input
                  id="staffsecond"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  aria-describedby="addon-wrapping2"
                />
              </div>

              <br />

              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping3">
                  Designation
                </span>
                <input
                  id="designation"
                  type="text"
                  className="form-control"
                  placeholder="Designation"
                  aria-label="Designation"
                  aria-describedby="addon-wrapping3"
                />
              </div>

              <br />

              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="disabledSelect">
                  Gender
                </label>
                <select className="form-select" id="disabledSelect">
                  <option value="" disabled selected>
                    Choose...
                  </option>
                  {/* Add gender options */}
                </select>
              </div>

              <br />

              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping4">
                  Address 1
                </span>
                <input
                  id="addresstext1"
                  type="text"
                  className="form-control"
                  placeholder="Address 1"
                  aria-label="Address 1"
                  aria-describedby="addon-wrapping4"
                />
              </div>

              {/* Repeat for Address 2 to 5... */}

              <br />

              <div className="form-group">
                <label htmlFor="dateInput">Join Date</label>
                <input
                  id="dateInput"
                  type="date"
                  className="form-control"
                  name="dateInput"
                />
              </div>

              <br />

              <div className="form-group">
                <label htmlFor="dateInput2">Date of Birth</label>
                <input
                  id="dateInput2"
                  type="date"
                  className="form-control"
                  name="dateInput"
                />
              </div>

              <br />

              <div className="form-group">
                <label htmlFor="contactNum">Contact Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="contactNum"
                  name="contactNumber"
                  placeholder="Enter your contact number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <br />

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <br />

              <button type="button" className="btn btn-secondary" id="addBtn">
                ADD
              </button>
              <button type="button" className="btn btn-success" id="updateBtn">
                Update
              </button>
              <button type="button" className="btn btn-danger" id="deleteBtn2">
                Delete
              </button>
              <button type="button" className="btn btn-info" id="resetBtn2">
                Reset
              </button>
            </div>
          </div>

          <br />

          {/* Table Section */}
          <div className="card">
            <div className="card-body mainContent">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Gender</th>
                    {/* Add more table headers as needed */}
                  </tr>
                </thead>
                <tbody id="tableBody">
                  <tr>{/* Populate table rows dynamically */}</tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default StaffPage;
