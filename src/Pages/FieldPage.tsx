import React, { useState, useEffect } from "react";
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
  const dataFillaction = (field: any) => {
    setFieldData({
      name: field.fieldName,
      location: field.fieldLocation,
      size: field.fieldSize,
      staff: field.fieldStaff,
    });
  
    // Optional: If you want to display Field ID in a label
    const fieldIDLabel = document.getElementById("lbl1");
    if (fieldIDLabel) {
      fieldIDLabel.textContent = field.fieldID;
    }
  };
  
  // State for field list
  const [fields, setFields] = useState([]);

  // State for images
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);

  useEffect(() => {
    fetchFields();
  }, []);

  // Function to fetch all fields and update table
  const fetchFields = async () => {
    try {
      const response = await axios.get("http://localhost:3000/field/viewAllFields");
      setFields(response.data); // Assuming the response data is an array of field objects
    } catch (error) {
      console.error("Error fetching fields:", error);
    }
  };

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
    formData.append("fieldStaff", fieldData.fieldStaff);
    
    if (image1) formData.append("pic1", image1);
    if (image2) formData.append("pic2", image2);

    try {
      await axios.post("http://localhost:3000/field/addField", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Field added successfully!");
      setFieldData({ name: "", location: "", size: "", staff: "" });
      setImage1(null);
      setImage2(null);
      fetchFields(); // Refresh table after adding field
    } catch (error) {
      console.error("Error adding field:", error);
      alert("Failed to add field. Please try again.");
    }
  };
  const updateField = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const fieldID = document.getElementById("lbl1")?.textContent;
    if (!fieldID) {
      alert("Please select a field to update.");
      return;
    }
  
    const updatedData = {
      fieldName: fieldData.name,
      fieldLocation: fieldData.location,
      fieldSize: fieldData.size,
      fieldStaff: fieldData.staff,
    };
  
    try {
      await axios.put(`http://localhost:3000/field/updateField/${fieldID}`, updatedData);
      alert("Field updated successfully!");
      fetchFields(); // Refresh table after update
    } catch (error) {
      console.error("Error updating field:", error);
      alert("Failed to update field. Please try again.");
    }
  };
  
  const deleteField = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const fieldID = document.getElementById("lbl1")?.textContent;
    if (!fieldID) {
      alert("Please select a field to delete.");
      return;
    }
  
    if (!window.confirm("Are you sure you want to delete this field?")) {
      return;
    }
  
    try {
      await axios.delete(`http://localhost:3000/field/deleteField/${fieldID}`);
      alert("Field deleted successfully!");
      setFieldData({ name: "", location: "", size: "", staff: "" });
      fetchFields(); // Refresh table after deletion
    } catch (error) {
      console.error("Error deleting field:", error);
      alert("Failed to delete field. Please try again.");
    }
  };
  
  const reset = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldData({ name: "", location: "", size: "", staff: "" });
  }

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
                    id="fieldName"
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
                    id="loc"
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
                    id="size"
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
                    value={fieldData.name}
                    onChange={handleChange}
                    id="staff"
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
                <button className="btn btn-info" onClick={updateField}>
                  Update
                </button>
                <button className="btn btn-success" onClick={deleteField}>
                  Delete
                </button>
                <button className="btn btn-secondary" onClick={reset}>
                  Reset
                </button>

                <br />
                <br />

                {/* Fields Table */}
                <div className="card">
                  <div className="card-body mainContent">
                    <table className="table table-dark">
                      <thead>
                        <tr>
                          <th scope="col">Field ID</th>
                          <th scope="col">Field Name</th>
                          <th scope="col">Field Location</th>
                          <th scope="col">Field Size</th>
                          <th scope="col">Staff Name</th>
                        </tr>
                      </thead>
                      <tbody>
                      {fields.length > 0 ? (
                       fields.map((field: any) => (
                    <tr key={field.fieldID} onClick={() => dataFillaction(field)} style={{ cursor: "pointer" }}>
                   <td className="d1">{field.fieldID}</td>
                   <td>{field.fieldName}</td>
                   <td>{field.fieldLocation}</td>
                   <td>{field.fieldSize}</td>
                   <td>{field.fieldStaff}</td>
                </tr>
                 ))
                   ) : (
                   <tr>
                    <td colSpan={5} className="text-center">No Fields Available</td>
                   </tr>
                     )}
                    </tbody>

                    </table>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FieldPage;
