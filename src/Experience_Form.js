import React from "react";
import "./forms.css";

function Experience_Form({ data, onUpdate }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onUpdate({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="form-container">
      <h2>Experience</h2>
      <form>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={data.companyName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={data.position || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={data.country || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={data.state || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Time Period</label>
          <div className="time-period">
            <input
              type="text"
              name="start"
              placeholder="MM/YY"
              value={data.start || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="finish"
              placeholder="MM/YY"
              value={data.finish || ""}
              onChange={handleChange}
              disabled={data.currentlyWorking}
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={data.currentlyWorking || false}
                onChange={handleChange}
              />
              Currently working here
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Experience_Form;
