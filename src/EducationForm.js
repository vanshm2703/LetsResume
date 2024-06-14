import React, { useState } from 'react';

function EducationForm() {
  const [institutionName, setInstitutionName] = useState('');
  const [course, setCourse] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [currentlyStudying, setCurrentlyStudying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="form-container">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Institution Name</label>
          <input
            type="text"
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Time Period</label>
          <div className="time-period">
            <input
              type="text"
              placeholder="MM/YY"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <input
              type="text"
              placeholder="MM/YY"
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              disabled={currentlyStudying}
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={currentlyStudying}
                onChange={(e) => setCurrentlyStudying(e.target.checked)}
              />
              Currently study here
            </label>
          </div>
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default EducationForm;
