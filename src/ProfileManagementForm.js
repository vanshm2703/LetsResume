import React, { useState } from "react";
import "./component.css";
import "./forms.css";
import { registerapi } from "../src/api/apiCall";

function ProfileManagementForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [registeredUser, setRegisteredUser] = useState(null); // State to hold registered user info

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      alert("Please fill all the fields");
      return;
    }

    const formData = {
      firstName,
      lastName,
      email
    };

    try {
      const response = await registerapi(formData);
      alert("Registration successful");
      setRegisteredUser(response); // Update state with registered user info
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2>Profile Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button id="save" type="submit">
          Save
        </button>
      </form>

      {registeredUser && (
        <div className="registered-user-info">
          <h3>Registered User Information</h3>
          <p><strong>First Name:</strong> {registeredUser.firstName}</p>
          <p><strong>Last Name:</strong> {registeredUser.lastName}</p>
          <p><strong>Email:</strong> {registeredUser.email}</p>
        </div>
      )}
    </div>
  );
}

export default ProfileManagementForm;
