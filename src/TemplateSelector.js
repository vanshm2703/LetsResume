import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const templates = [
  { id: 1, name: 'Classic', image: '/images/template1.png' },
  { id: 2, name: 'Modern', image: '/images/template2.png' },
  { id: 3, name: 'Creative', image: '/images/template3.png' },
];

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (template) => {
    setSelectedTemplate(template.id);
    navigate(`/create-resume/${template.id}`);
  };

  return (
    <div className="container mt-5">
      <h2>Select a Template</h2>
      <div className="row">
        {templates.map((template) => (
          <div key={template.id} className="col-md-4">
            <div className={`card ${selectedTemplate === template.id ? 'border-primary' : ''}`} onClick={() => handleSelect(template)}>
              <img src={template.image} className="card-img-top" alt={template.name} />
              <div className="card-body">
                <h5 className="card-title">{template.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;