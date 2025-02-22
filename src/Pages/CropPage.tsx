import React, { useState } from "react";
import axios from "axios";
import AccountDetails from "../Component/AccountDetail";
import Sidebar from "../Component/Sidebar";

function CropPage() {
  const cropseason = ["summer", "rainy", "spring"];
  const category = ["trees", "plants", "cereals"];

  const [cropName, setCropName] = useState("");
  const [scientificName, setCropScientific] = useState("");
  const [cropCategory, setCropCategory] = useState("");
  const [cropSeason, setCropSeason] = useState("");

  const handleAddCrop = async () => {
    try {
      const response = await axios.post("http://localhost:3000/crop/addCrop", {
        cropName: cropName,
        scientificName: scientificName,
        category: cropCategory,
        season: cropSeason,
      });
      alert("Crop added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding crop:", error);
      alert("Failed to add crop");
    }
  };

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

          <div className="card anim1">
            <div className="card-body mainContent">
              {/* Crop Name */}
              <div className="input-group mb-4">
                <span className="input-group-text">Crop Name</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Crop name"
                  value={cropName}
                  onChange={(e) => setCropName(e.target.value)}
                />
              </div>

              {/* Scientific Name */}
              <div className="input-group mb-4">
                <span className="input-group-text">Crop Scientific Name</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Scientific name"
                  value={scientificName}
                  onChange={(e) => setCropScientific(e.target.value)}
                />
              </div>

              {/* Category Dropdown */}
              <div className="input-group mb-3">
                <label className="input-group-text">Category</label>
                <select
                  className="form-select"
                  value={cropCategory}
                  onChange={(e) => setCropCategory(e.target.value)}
                >
                  <option value="" disabled>
                    Choose...
                  </option>
                  {category.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Crop Season Dropdown */}
              <div className="input-group mb-3">
                <label className="input-group-text">Crop Season</label>
                <select
                  className="form-select"
                  value={cropSeason}
                  onChange={(e) => setCropSeason(e.target.value)}
                >
                  <option value="" disabled>
                    Choose...
                  </option>
                  {cropseason.map((season, index) => (
                    <option key={index} value={season}>
                      {season}
                    </option>
                  ))}
                </select>
              </div>

              {/* Image Upload */}
              <div className="input-group mb-4">
                <input type="file" className="form-control"/>
              </div>

              <img
                id="previewImage3"
                className="rounded float-start mb-4"
                style={{ maxWidth: "45%" }}
                alt="Preview Image"
              />
              <br />

              {/* Buttons */}
              <button type="button" className="btn btn-primary" onClick={handleAddCrop}>
                ADD
              </button>
              <button type="button" className="btn btn-secondary">
                UPDATE
              </button>
              <button type="button" className="btn btn-success">
                DELETE
              </button>
              <button type="button" className="btn btn-danger">
                RESET
              </button>
            </div>
          </div>

          {/* Crop Table */}
          <br />
          <div className="card">
            <div className="card-body mainContent">
              <table className="table table-dark">
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
