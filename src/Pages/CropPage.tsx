import React from "react";
import AccountDetails from "../Component/AccountDetail";
import Sidebar from "../Component/Sidebar";

function CropPage() {
  return (
    <div>
      <AccountDetails />

      <div className="dashboard-container">
        <Sidebar />

        <main className="content">
          <h2 className="text-center">Crop Input</h2>
          <div style={{ padding: "30px" }}>
            Crop ID: <label id="lbl4"> </label>
          </div>
          <br />
          <br />

          <div className="card anim1">
            <div className="card-body mainContent">
              {/* Crop Name */}
              <div className="input-group mb-4">
                <span className="input-group-text" id="addon-wrapping1">
                  Crop Name
                </span>
                <input
                  id="cropName_C"
                  type="text"
                  className="form-control"
                  placeholder="Enter Crop name"
                  aria-label="Field Name"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group mb-4">
                <span className="input-group-text" id="addon-wrapping2">
                  Crop Scientific Name
                </span>
                <input
                  id="cropScientific_C"
                  type="text"
                  className="form-control"
                  placeholder="Enter Scientific name"
                  aria-label="Field Name"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="category_C">
                  Category
                </label>
                <select className="form-select" id="category_C">
                  <option value="" disabled selected>
                    Choose...
                  </option>
                  {/* Add dynamic options here */}
                </select>
              </div>

              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="cropSeason_C">
                  Crop Season
                </label>
                <select className="form-select" id="cropSeason_C">
                  <option value="" disabled selected>
                    Choose...
                  </option>
                  {/* Add dynamic options here */}
                </select>
              </div>

              {/* Image Upload */}
              <div>
                <div className="input-group mb-4">
                  <input type="file" className="form-control" id="inputGroupFile01" />
                </div>

                <img
                  id="previewImage3"
                  className="rounded float-start mb-4"
                  style={{ maxWidth: "45%" }}
                  alt="Preview Image"
                />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              {}
              <button type="button" className="btn btn-primary button10" id="addBtn_C">
                ADD
              </button>
              <button
                type="button"
                className="btn btn-secondary button10"
                id="updateBtn_C"
              >
                UPDATE
              </button>
              <button
                type="button"
                className="btn btn-success button10"
                id="deleteBtn_C"
              >
                DELETE
              </button>
              <button
                type="button"
                className="btn btn-danger button10"
                id="resetBtn_C"
              >
                RESET
              </button>
            </div>
          </div>

          {/* Crop Table */}
          <br />
          <div className="card">
            <div className="card-body mainContent">
              <table id="cropTable" className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Crop ID</th>
                    <th scope="col">Crop Name</th>
                    <th scope="col">Crop Scientific Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Crop Season</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dynamic table rows will go here */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CropPage;
