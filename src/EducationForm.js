import React from "react";
import "./forms.css";

function EducationForm({ data, onUpdate }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onUpdate({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="form-container">
      <h2>Education</h2>
      <form>
        <div className="form-group">
          <label>Institution Name</label>
          <input
            type="text"
            name="institutionName"
            value={data.institutionName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            name="course"
            value={data.course || ""}
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
              disabled={data.currentlyStudying}
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="currentlyStudying"
                checked={data.currentlyStudying || false}
                onChange={handleChange}
              />
              Currently study here
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EducationForm;
