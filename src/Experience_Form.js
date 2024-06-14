import React, { useState } from 'react';

function Experience_Form() {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="form-container">
      <h2>Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
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
              disabled={currentlyWorking}
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={currentlyWorking}
                onChange={(e) => setCurrentlyWorking(e.target.checked)}
              />
              Currently working here
            </label>
          </div>
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default Experience_Form;
