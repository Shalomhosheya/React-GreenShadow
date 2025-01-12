import React from "react";
import AccountDetails from "../Component/AccountDetail";
import Sidebar from "../Component/Sidebar";

function MonitoringLogPage() {
  return (
    <div>
      {/* Account Details */}
      <AccountDetails />

      {/* Main Dashboard Container */}
      <div className="dashboard-container">
        <Sidebar />

        <main className="content">
          <h2 className="text-center anim1">Monitoring Log</h2>
          <br />

          {/* Monitoring Log Input Form */}
          <div className="card anim1">
            <div className="card-body mainContent">
              <div className="card-body">
                {/* Monitoring Code */}
                Monitoring Code: <label id="lbl5"> </label>
                <br />
                <br />

                {/* Staff ID */}
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="staffID_Ml">
                    Staff ID
                  </label>
                  <select className="form-select" id="staffID_Ml">
                    <option value="" disabled selected>
                      Choose...
                    </option>
                    {/* Add dynamic options here */}
                  </select>
                </div>
                <br />

                {/* Field ID */}
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="fieldID_Ml">
                    Field ID
                  </label>
                  <select className="form-select" id="fieldID_Ml">
                    <option value="" disabled selected>
                      Choose...
                    </option>
                    {/* Add dynamic options here */}
                  </select>
                </div>
                <br />

                {/* Crop ID */}
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="cropID_Ml">
                    Crop ID
                  </label>
                  <select className="form-select" id="cropID_Ml">
                    <option value="" disabled selected>
                      Choose...
                    </option>
                    {/* Add dynamic options here */}
                  </select>
                </div>
                <br />

                {/* Log Date */}
                <div className="form-group">
                  <label htmlFor="logDate_Ml">Log date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="logDate_Ml"
                    name="dateInput"
                  />
                </div>
                <br />

                {/* Observation Description */}
                <div className="mb-3">
                  <label htmlFor="observationDis_Ml" className="form-label">
                    Observation Description
                  </label>
                  <textarea
                    className="form-control"
                    id="observationDis_Ml"
                    // rows ="3"
                  ></textarea>
                </div>
                <br />

                {/* Image Upload */}
                <div className="input-group mb-4">
                  <input type="file" className="form-control" id="image_Ml" />
                </div>
                <img
                  id="previewImage3"
                  className="rounded float-start mb-4"
                  style={{ maxWidth: "45%" }}
                  alt="Crop Image"
                />
              </div>

              {/* Action Buttons */}
              <div>
                <button type="button" className="btn btn-primary" id="addBtn_Ml">
                  ADD
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="updateBtn_Ml"
                >
                  UPDATE
                </button>
                <button
                  type="button"
                  className="btn btn-success delete"
                  id="deleteBtn_Ml"
                >
                  DELETE
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  id="resetBtn_Ml"
                >
                  RESET
                </button>
              </div>
            </div>
          </div>

          {/* Monitoring Log Table */}
          <div className="card">
            <div className="card-body mainContent">
              <table className="table table-dark" id="equipmentTable">
                <thead>
                  <tr>
                    <th scope="col">Monitoring log code</th>
                    <th scope="col">Staff ID</th>
                    <th scope="col">Crop ID</th>
                    <th scope="col">Field ID</th>
                    <th scope="col">Log date</th>
                    <th scope="col">Observation</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dynamic table rows will be added here */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MonitoringLogPage;
