import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import AccountDetails from "../Component/AccountDetail";
import axios from "axios";

function FieldPage() {
  // State for form fields
  const [fieldData, setFieldData] = useState({
    name: "",
    location: "",
    size: "",
    staff: "",
  });

  // State for images
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const addField = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("fieldName", fieldData.name);
    formData.append("fieldLocation", fieldData.location);
    formData.append("fieldSize", fieldData.size);
    formData.append("staff", fieldData.staff);
    
    if (image1) formData.append("pic1", image1);
    if (image2) formData.append("pic2", image2);

    try {
      const response = await axios.post("http://localhost:3000/field/addField", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Field added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding field:", error);
      alert("Failed to add field. Please try again.");
    }
  };

  return (
    <div>
      <AccountDetails />
      <div className="dashboard-container">
        <Sidebar />
        <main className="content">
          <h2 className="text-center anim1">Field Input</h2>
          <div className="container-fluid anim1">
            <div className="card mx-auto p-1" style={{ maxWidth: "90%", minHeight: "80vh" }}>
              <div className="card-body stylecard mainContent">
                <p>Field ID: <label id="lbl1"></label></p>

                {/* Field Name */}
                <div className="input-group mb-4">
                  <span className="input-group-text">Field Name</span>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter field name"
                    value={fieldData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Field Location */}
                <div className="input-group mb-4">
                  <span className="input-group-text">Field Location</span>
                  <input
                    name="location"
                    type="text"
                    className="form-control"
                    placeholder="Enter field location"
                    value={fieldData.location}
                    onChange={handleChange}
                  />
                </div>

                {/* Size of the Field */}
                <div className="input-group mb-4">
                  <span className="input-group-text">Size of the Field</span>
                  <input
                    name="size"
                    type="text"
                    className="form-control"
                    placeholder="Enter field size"
                    value={fieldData.size}
                    onChange={handleChange}
                  />
                </div>

                {/* Staff */}
                <div className="input-group mb-4">
                  <span className="input-group-text">Staff</span>
                  <input
                    name="staff"
                    type="text"
                    className="form-control"
                    placeholder="Enter staff name"
                    value={fieldData.staff}
                    onChange={handleChange}
                  />
                </div>

                {/* File Upload 1 */}
                <div className="input-group mb-4">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleFileChange(e, setImage1)}
                  />
                </div>

                {/* File Upload 2 */}
                <div className="input-group mb-4">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleFileChange(e, setImage2)}
                  />
                </div>

                <button className="btn btn-danger" onClick={addField}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FieldPage;
