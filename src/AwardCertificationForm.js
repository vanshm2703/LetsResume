import React, { useState } from 'react';

function AwardCertificationForm() {
  const [awardName, setAwardName] = useState('');
  const [institution, setInstitution] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="form-container">
      <h2>Award/Certification</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Award Name</label>
          <input
            type="text"
            value={awardName}
            onChange={(e) => setAwardName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Institution</label>
          <input
            type="text"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default AwardCertificationForm;
