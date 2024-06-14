import React, { useState } from 'react';
import './component.css';
import PersonalInformationForm from './PersonalInformation';
import ContactInformationForm from './ContactInformationForm';
import  ExperienceForm from  './Experience_Form';
import AwardCertificationForm from './AwardCertificationForm';
import EducationForm from './EducationForm';


const sections = [
  'Personal Information',
  'Education',
  'Experience',
  'Contact Information',
  'Award/Certification'
];

function Resume() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setActiveSection(sections[nextIndex]);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Personal Information':
        return < PersonalInformationForm />;
      case 'Education':
        return <EducationForm />;
      case 'Experience':
        return <ExperienceForm />;
      case 'Contact Information':
        return <ContactInformationForm />;
      case 'Award/Certification':
        return <AwardCertificationForm />;
      default:
        return null;
    }
  };

  return (
    
    <div className="app-container">
      <div className="sidebar">
        <h1>Resume Builder</h1>
        <ul>
          {sections.map((section, index) => (
            <li 
              key={index}
              onClick={() => setActiveSection(section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section}
            </li>
          ))}
        </ul>
        <button className="change-template">Change Template</button>
      </div>
      <div className="form-container">
        {renderSection()}
        <button type="button" className="next-button" onClick={handleNext}>
          Next session
        </button>
      </div>
    </div>
    
  );
}

export default Resume;
