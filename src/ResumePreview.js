import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./component.css";

const ResumePreview = ({ data, style }) => {
  const initialSections = [
    { id: "PersonalInformation", title: "Personal Information" },
    { id: "Education", title: "Education" },
    { id: "Experience", title: "Experience" },
    { id: "ContactInformation", title: "Contact Information" },
    { id: "Awards", title: "Awards/Certifications" },
  ];

  const [sections, setSections] = useState(initialSections);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newSections = Array.from(sections);
    const [removed] = newSections.splice(result.source.index, 1);
    newSections.splice(result.destination.index, 0, removed);

    setSections(newSections);
  };

  const renderSection = (section) => {
    switch (section.id) {
      case "PersonalInformation":
        return (
          <div key={section.id} className="section" style={style}>
            <h2>
              {data.personalInformation.firstName}{" "}
              {data.personalInformation.lastName}
            </h2>
            <p>{data.personalInformation.email}</p>
            <p>{data.personalInformation.phone}</p>
            <p>{data.personalInformation.address}</p>
          </div>
        );
      case "Education":
        return (
          <div key={section.id} className="section" style={style}>
            <h3>Education</h3>
            {data.education.map((edu, index) => (
              <div key={index}>
                <p>{edu.institutionName}</p>
                <p>{edu.course}</p>
                <p>{edu.country}</p>
                <p>{edu.state}</p>
                <p>
                  {edu.start} - {edu.currentlyStudying ? "Present" : edu.finish}
                </p>
              </div>
            ))}
          </div>
        );
      case "Experience":
        return (
          <div key={section.id} className="section" style={style}>
            <h3>Experience</h3>
            {data.experience.map((exp, index) => (
              <div key={index}>
                <p>{exp.jobTitle}</p>
                <p>{exp.companyName}</p>
                <p>{exp.country}</p>
                <p>{exp.state}</p>
                <p>
                  {exp.start} - {exp.currentlyWorking ? "Present" : exp.finish}
                </p>
              </div>
            ))}
          </div>
        );
      case "ContactInformation":
        return (
          <div key={section.id} className="section" style={style}>
            <h3>Contact Information</h3>
            <p>{data.contactInformation.email}</p>
            <p>{data.contactInformation.phone}</p>
          </div>
        );
      case "Awards":
        return (
          <div key={section.id} className="section" style={style}>
            <h3>Awards/Certifications</h3>
            {data.awards.map((award, index) => (
              <div key={index}>
                <p>{award.details}</p>
                <p>{award.awardName}</p>
                <p>{award.institution}</p>
                <p>{award.date}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    setSections(initialSections);
  }, [data]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="resume-preview">
        {(provided) => (
          <div
            className="resume-preview"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={style}
          >
            {sections.map((section, index) => (
              <Draggable
                key={section.id}
                draggableId={section.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`section ${snapshot.isDragging ? "dragging" : ""}`}
                    style={style}
                  >
                    {renderSection(section)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ResumePreview;
