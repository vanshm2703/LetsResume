import React from "react";
import "./forms.css";

function AwardCertificationForm({ data, onUpdate }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...data, [name]: value });
  };

  return (
    <div className="form-container">
      <h2>Awards & Certifications</h2>
      <form>
        <div className="form-group">
          <label>Award/Certification Name</label>
          <input
            type="text"
            name="name"
            value={data.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Institution</label>
          <input
            type="text"
            name="institution"
            value={data.institution || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            name="date"
            placeholder="MM/YY"
            value={data.date || ""}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default AwardCertificationForm;

