import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./component.css";
import "./forms.css";
import { registerapi, registerList } from "../src/api/apiCall";

function ProfileManagementForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

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
    const exists = responses.filter((elem) => {
      return elem.email === formData.email;
    });

    if (exists.length > 0) {
    
      alert("You are already registered,redirecting to ResumeBuilder.");
      navigate("/resume");
    } else {
      
      const response = await registerapi(formData);
      alert("Welcome to the family,Registeration Successful");
      setFirstName("");
      setLastName("");
      setEmail("");
      navigate("/resume");
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
          Save & Next
        </button>
      </form>
    </div>
  );
}

export default ProfileManagementForm;
