import React from "react";
import "./component.css";

function ResumePreview({ data, selectedColor, selectedBackgroundColor, selectedFontFamily }) {
  const { personalInformation, education, experience, contactInformation, awards } = data;

  const sectionStyles = {
    color: selectedColor.value,
    backgroundColor: selectedBackgroundColor.value,
    fontFamily: selectedFontFamily.value,
  };

  return (<div className="preview-container" >
    <div className="preview">
      <div className="personal-information" style={sectionStyles}>
        <h2>Personal Information</h2>
        <div>
          <strong>First Name:</strong> {personalInformation.firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {personalInformation.lastName}
        </div>
        <div>
          <strong>Email:</strong> {personalInformation.email}
        </div>
        <div>
          <strong>Phone:</strong> {personalInformation.phone}
        </div>
        <div>
          <strong>Address:</strong> {personalInformation.address}
        </div>
      </div>
      <div className="education" style={sectionStyles}>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <div>
              <strong>Institution Name:</strong> {edu.institutionName}
            </div>
            <div>
              <strong>Course:</strong> {edu.course}
            </div>
            <div>
              <strong>Country:</strong> {edu.country}
            </div>
            <div>
              <strong>State:</strong> {edu.state}
            </div>
            <div>
              <strong>Start:</strong> {edu.start}
            </div>
            <div>
              <strong>Finish:</strong> {edu.finish}
            </div>
            <div>
              <strong>Currently Studying:</strong> {edu.currentlyStudying ? "Yes" : "No"}
            </div>
          </div>
        ))}
      </div>
      <div className="experience" style={sectionStyles}>
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <div>
              <strong>Company:</strong> {exp.companyName}
            </div>
            <div>
              <strong>Position:</strong> {exp.position}
            </div>
            <div>
              <strong>Country:</strong> {exp.country}
            </div>
            <div>
              <strong>State:</strong> {exp.state}
            </div>
            <div>
              <strong>Start:</strong> {exp.start}
            </div>
           
            <div>
              <strong>Currently Working:</strong> {exp.currentlyWorking ? "Yes" : "No"}
            </div>
          </div>
        ))}
      </div>
      
     
      <div className="awards" style={sectionStyles}>
        <h2>Awards & Certifications</h2>
        {awards.map((award, index) => (
          <div key={index}>
            <div>
              <strong>Award/Certification Name:</strong> {award.name}
            </div>
            <div>
              <strong>Institution:</strong> {award.institution}
            </div>
            <div>
              <strong>Date:</strong> {award.date}
            </div>
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ResumePreview;
