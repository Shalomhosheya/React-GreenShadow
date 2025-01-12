import React from "react";
import AccountDetails from "../Component/AccountDetail";
import Sidebar from "../Component/Sidebar";

function EquipmentDetailPage() {
  return (
    <div>
      <AccountDetails />

      <div className="dashboard-container">
        <Sidebar />

        <main className="content">
          <h2 className="text-center anim1">Equipment Input</h2>
          <br />

          <div className="card anim1">
            <div className="card-body mainContent">
              <div className="card-body">
                <div>
                  Equipment Code: <label id="lbl4"> </label>
                </div>
                <br />

                <div className="input-group mb-4">
                  <span className="input-group-text" id="addon-wrapping">
                    Equipment
                  </span>
                  <input
                    id="equip_E"
                    type="text"
                    className="form-control"
                    placeholder="Enter equipment name"
                    aria-label="Equipment Name"
                    aria-describedby="addon-wrapping"
                  />
                </div>

                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="type_E">
                    Type
                  </label>
                  <select className="form-select" id="type_E">
                    <option value="" disabled selected>
                      Choose...
                    </option>
                    {/* Add dynamic options here */}
                  </select>
                </div>

                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="status_E">
                    Status
                  </label>
                  <select className="form-select" id="status_E">
                    <option value="" disabled selected>
                      Choose...
                    </option>
                    {/* Add dynamic options here */}
                  </select>
                </div>
              </div>

              <div>
                <button type="button" className="btn btn-primary" id="addBtn_E">
                  ADD
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="updateBtn_E"
                >
                  UPDATE
                </button>
                <button
                  type="button"
                  className="btn btn-success delete"
                  id="deleteBtn_E"
                >
                  DELETE
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  id="resetBtn_E"
                >
                  RESET
                </button>
              </div>
            </div>

            {/* Equipment Table */}
            <div className="card-body mainContent">
              <table className="table table-dark" id="equipmentTable">
                <thead>
                  <tr>
                    <th scope="col">Equipment Code</th>
                    <th scope="col">Equipment Name</th>
                    <th scope="col">Equipment Type</th>
                    <th scope="col">Status</th>
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

export default EquipmentDetailPage;
