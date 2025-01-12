import React from "react";
import AccountDetails from "../Component/AccountDetail";
import Sidebar from "../Component/Sidebar";

function ReservationPage() {
  return (
    <div>
      {/* Account Details Section */}
      <AccountDetails />

      {/* Main Dashboard Container */}
      <div className="dashboard-container">
        <Sidebar />

        <main className="content">
          <h2 className="text-center anim1">Reservation</h2>

          <div style={{ padding: "30px" }}>
            Reservation Token: <label id="lbl3"></label>
          </div>

          <br />

          {/* Reservation Form */}
          <div className="card mainContent anim1">
            <div className="card-body">
              {/* Staff ID */}
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="staffID_R">
                  Staff ID
                </label>
                <select className="form-select" id="staffID_R">
                  <option value="" disabled selected>
                    Choose...
                  </option>
                  {/* Dynamic options can be added here */}
                </select>
              </div>

              <br />

              {/* Vehicle ID */}
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="vehicleID_R">
                  Vehicle ID
                </label>
                <select className="form-select" id="vehicleID_R">
                  <option value="" disabled selected>
                    Choose...
                  </option>
                  {/* Dynamic options can be added here */}
                </select>
              </div>

              <br />

              {/* Reserved Date */}
              <div className="form-group">
                <label htmlFor="reservedDate_R" style={{ position: "relative", left: "5px" }}>
                  Reserved Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="reservedDate_R"
                  name="dateInput"
                />
              </div>

              <br />

              {/* Response */}
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="responseType_R">
                  Response
                </label>
                <select className="form-select" id="responseType_R">
                  <option value="" disabled selected>
                    Choose...
                  </option>
                  {/* Dynamic options can be added here */}
                </select>
              </div>

              <br />

              {/* Reservation Type */}
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="reservationType_R">
                  Reservation Type
                </label>
                <select className="form-select" id="reservationType_R">
                  <option value="" disabled selected>
                    Choose...
                  </option>
                  {/* Dynamic options can be added here */}
                </select>
              </div>

              <br />

              {/* Action Buttons */}
              <div>
                <button type="button" className="btn btn-primary" id="addBtn_R">
                  ADD
                </button>
                <button type="button" className="btn btn-secondary" id="updateBtn_R">
                  UPDATE
                </button>
                <button type="button" className="btn btn-success" id="deleteBtn_R">
                  DELETE
                </button>
                <button type="button" className="btn btn-danger" id="resetBtn_R">
                  RESET
                </button>
              </div>
            </div>
          </div>

          <br />

          {/* Reservations Table */}
          <div className="card">
            <div className="card-body mainContent">
              <table id="fieldsTable" className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Reservation Token</th>
                    <th scope="col">Staff ID</th>
                    <th scope="col">Vehicle ID</th>
                    <th scope="col">Reserved Date</th>
                    <th scope="col">Response</th>
                    <th scope="col">Reservation Type</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dynamic rows can be added here */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ReservationPage;
