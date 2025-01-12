import React from 'react';
import Sidebar from '../Component/Sidebar';
import AccountDetails from '../Component/AccountDetail';

function FieldPage() {
  return (
    <body>
        <AccountDetails/>
    <div className="dashboard-container">
      <Sidebar />
      <main className="content">
        <h2 className="text-center anim1">Field Input</h2>
        <br />
        <br />

        <div className="container-fluid anim1">
          <div className="card mx-auto p-1" style={{ maxWidth: '90%', minHeight: '80vh' }}>
            <div className="card-body stylecard mainContent">
              <p>
                Field ID: <label id="lbl1"></label>
              </p>
              <br />
              <br />

              {/* Field Name */}
              <div className="input-group mb-4">
                <span className="input-group-text" id="addon-wrapping">
                  Field Name
                </span>
                <input
                  id="fieldName"
                  type="text"
                  className="form-control"
                  placeholder="Enter field name"
                  aria-label="Field Name"
                  aria-describedby="addon-wrapping"
                />
              </div>

              {/* Field Location */}
              <div className="input-group mb-4">
                <span className="input-group-text" id="addon-wrapping2">
                  Field Location
                </span>
                <input
                  id="fieldLocation"
                  type="text"
                  className="form-control"
                  placeholder="Enter field location"
                  aria-label="Field Location"
                  aria-describedby="addon-wrapping2"
                />
              </div>

              {/* Size of the Field */}
              <div className="input-group mb-4">
                <span className="input-group-text" id="addon-wrapping3">
                  Size of the Field
                </span>
                <input
                  id="sizefield"
                  type="text"
                  className="form-control"
                  placeholder="Enter field size"
                  aria-label="Field Size"
                  aria-describedby="addon-wrapping3"
                />
              </div>

              {/* Staff */}
              <div className="input-group mb-4">
                <span className="input-group-text" id="addon-wrapping4">
                  Staff
                </span>
                <input
                  id="staff"
                  type="text"
                  className="form-control"
                  placeholder="Enter staff name"
                  aria-label="Staff"
                  aria-describedby="addon-wrapping4"
                />
              </div>

              <div className="card mx-auto p-4" style={{ maxWidth: '90%', minHeight: '80vh' }}>
                <div className="card-body">
                  {/* File Upload 1 */}
                  <div className="input-group mb-4">
                    <input type="file" className="form-control" id="inputGroupFile04" />
                  </div>

                  {/* File Upload 2 */}
                  <div className="input-group mb-4">
                    <input type="file" className="form-control" id="inputGroupFile03" />
                  </div>

                  {/* Image Preview */}
                  <img
                    id="previewImage1"
                    className="rounded float-start mb-4"
                    style={{ maxWidth: '45%' }}
                    alt="Preview Image 1"
                  />
                  <img
                    id="previewImage2"
                    className="rounded float-end mb-4"
                    style={{ maxWidth: '45%' }}
                    alt="Preview Image 2"
                  />
                </div>

                <button type="button" className="btn btn-danger" id="addBTN">
                  Add
                </button>
                <br />
                <button type="button" className="btn btn-primary" id="updateBtn">
                  Update
                </button>
                <br />
                <button type="button" className="btn btn-warning deleteClass" id="deleteBtn">
                  Delete
                </button>
                <br />
                <button type="button" className="btn btn-dark" id="resetBTN">
                  Reset
                </button>
              </div>
              <br />
              <table id="fieldsTable" className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Field ID</th>
                    <th scope="col">Field Name</th>
                    <th scope="col">Field Location</th>
                    <th scope="col">Size of the Land</th>
                    <th scope="col">Staff</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
    </body>
    
  );
}

export default FieldPage;
