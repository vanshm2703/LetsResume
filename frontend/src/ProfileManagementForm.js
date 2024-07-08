import React, { useState } from "react";
import "./component.css";
import "./forms.css";
import { registerapi, registerList } from "../src/api/apiCall";

function ProfileManagementForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      alert("Please fill all the fields");
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
    };

      const responses = await registerList();
      const existes = responses.filter((elem) => {
        return elem.email === formData.email;
      });
      const response = await registerapi(formData);

      if (existes.length > 0) {
        // User already exists with this email
        alert(
          "User already exists with this email. Please try registering with a different email."
        );
        
      } else {
        // Registration successful
        alert("Registration successful");
        setFirstName("");
        setLastName("");
        setEmail("");
      }
  };

  return (
    <div className="profilem-container">
      <h2><strong><em>Profile Management</em></strong></h2>
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
    </div>
  );
}

export default ProfileManagementForm;
