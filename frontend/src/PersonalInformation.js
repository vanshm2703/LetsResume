import React from "react";
import './forms.css';
import ProfileManagementForm from "./ProfileManagementForm";

function PersonalInformationForm({ data, onUpdate }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h2><strong><em>Personal Information</em></strong></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={data.lastName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={data.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={data.address || ""}
            onChange={handleChange}
          />
        </div>
       
      </form>
    </div>
  );
}

export default PersonalInformationForm;
