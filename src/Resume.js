import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";
import Select from "react-select";
import "./component.css";
import PersonalInformationForm from "./PersonalInformation";
import ContactInformationForm from "./ContactInformationForm";
import Experience_Form from "./Experience_Form";
import AwardCertificationForm from "./AwardCertificationForm";
import EducationForm from "./EducationForm";
import ResumePreview from "./ResumePreview";
import TemplateSelector from "./TemplateSelector";

const sections = [
  "Personal Information",
  "Education",
  "Experience",
  "Contact Information",
  "Award/Certification",
];

const downloadOptions = [
  { value: "pdf", label: "PDF" },
  { value: "docx", label: "DOCX" },
  { value: "jpg", label: "JPG" },
];

const templates = [
  {
    id: "template1",
    name: "Classic",
    style: {
      fontFamily: "'Times New Roman', Times, serif",
      color: "black",
      textAlign: "center",
      backgroundColor: "white",
    },
  },
  {
    id: "template2",
    name: "Modern",
    style: {
      fontFamily: "'Arial', sans-serif",
      color: "white",
      textAlign: "left",
      backgroundColor: "black",
    },
  },
  {
    id: "template3",
    name: "Elegant",
    style: {
      fontFamily: "'Georgia', serif",
      color: "gray",
      textAlign: "justify",
      backgroundColor: "cyan",
    },
  },
];

function Resume() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [resumeData, setResumeData] = useState({
    personalInformation: {},
    education: [],
    experience: [],
    contactInformation: {},
    awards: [],
  });
  const [selectedFormat, setSelectedFormat] = useState(downloadOptions[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0].style);
  const [showTemplateOptions, setShowTemplateOptions] = useState(false);

  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setActiveSection(sections[nextIndex]);
  };

  const handleUpdate = (section, data) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  const handleAdd = (section) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: [
        ...prevData[section],
        section === "education" ||
        section === "experience" ||
        section === "awards"
          ? {
              institutionName: "",
              course: "",
              country: "",
              state: "",
              start: "",
              finish: "",
              currentlyStudying: false,
            }
          : {},
      ],
    }));
  };

  const handleRemove = (section, index) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: prevData[section].filter((_, i) => i !== index),
    }));
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template.style);
    setShowTemplateOptions(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Personal Information":
        return (
          <PersonalInformationForm
            data={resumeData.personalInformation}
            onUpdate={(data) => handleUpdate("personalInformation", data)}
          />
        );
      case "Education":
        return (
          <div>
            {resumeData.education.map((data, index) => (
              <div key={index} className="education-entry">
                <EducationForm
                  data={data}
                  onUpdate={(updatedData) => {
                    const updatedEducation = [...resumeData.education];
                    updatedEducation[index] = updatedData;
                    handleUpdate("education", updatedEducation);
                  }}
                />
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemove("education", index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-button"
              onClick={() => handleAdd("education")}
            >
              Add Education
            </button>
          </div>
        );
      case "Experience":
        return (
          <div>
            {resumeData.experience.map((data, index) => (
              <div key={index} className="experience-entry">
                <Experience_Form
                  data={data}
                  onUpdate={(updatedData) => {
                    const updatedExperience = [...resumeData.experience];
                    updatedExperience[index] = updatedData;
                    handleUpdate("experience", updatedExperience);
                  }}
                />
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemove("experience", index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-button"
              onClick={() => handleAdd("experience")}
            >
              Add Experience
            </button>
          </div>
        );
      case "Award/Certification":
        return (
          <div>
            {resumeData.awards.map((data, index) => (
              <div key={index} className="awards-entry">
                <AwardCertificationForm
                  data={data}
                  onUpdate={(updatedData) => {
                    const updatedAwards = [...resumeData.awards];
                    updatedAwards[index] = updatedData;
                    handleUpdate("awards", updatedAwards);
                  }}
                />
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemove("awards", index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-button"
              onClick={() => handleAdd("awards")}
            >
              Add Award/Certification
            </button>
          </div>
        );
      case "Contact Information":
        return (
          <ContactInformationForm
            data={resumeData.contactInformation}
            onUpdate={(data) => handleUpdate("contactInformation", data)}
          />
        );
      default:
        return null;
    }
  };

  const handleDownload = async () => {
    const previewElement = document.querySelector(".preview-container");

    switch (selectedFormat.value) {
      case "pdf":
        const canvasPDF = await html2canvas(previewElement);
        const imgData = canvasPDF.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("resume.pdf");
        break;

      case "docx":
        const doc = new Document({
          sections: [
            {
              properties: {},
              children: [
                new Paragraph("Resume"),
                // Add other resume content here
              ],
            },
          ],
        });

        Packer.toBlob(doc).then((blob) => {
          saveAs(blob, "resume.docx");
        });
        break;

      case "jpg":
        const canvasJPG = await html2canvas(previewElement);
        canvasJPG.toBlob((blob) => {
          saveAs(blob, "resume.jpg");
        });
        break;

      default:
        break;
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
              className={activeSection === section ? "active" : ""}
            >
              {section}
            </li>
          ))}
        </ul>
        <button
          className="change-template"
          onClick={() => setShowTemplateOptions(true)}
        >
          Change Template
        </button>
        {showTemplateOptions && (
          <TemplateSelector
            templates={templates}
            onSelect={handleTemplateChange}
          />
        )}
      </div>
      <div className="form-container">
        {renderSection()}
        <button type="button" className="next-button" onClick={handleNext}>
          Next Section
        </button>
        <div className="download-container">
          <Select
            options={downloadOptions}
            defaultValue={selectedFormat}
            onChange={setSelectedFormat}
            className="download-select"
          />
          <button class="botao" onClick={handleDownload}>
            <svg
              class="mysvg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Interface / Download">
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#f1f1f1"
                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                    id="Vector"
                  ></path>
                </g>
              </g>
            </svg>
            <span class="texto">Download Resume</span>
          </button>
        </div>
      </div>
      <div className="preview-container">
        <ResumePreview data={resumeData} style={selectedTemplate} />
      </div>
    </div>
  );
}

export default Resume;
