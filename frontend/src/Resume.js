import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";

import Select from "react-select";
import "./component.css";
import PersonalInformationForm from "./PersonalInformation";
import ContactInformationForm from "./ContactInformationForm";
import Experience_Form from "./Experience_Form";
import AwardCertificationForm from "./AwardCertificationForm";
import EducationForm from "./EducationForm";
import ResumePreview from "./ResumePreview";

const sections = [
  "Personal Information",
  "Education",
  "Experience",
  
  "Award/Certification",
];

const downloadOptions = [
  { value: "pdf", label: "PDF" },
 
  { value: "jpg", label: "JPG" },
];

const colorOptions = [
  { value: "black", label: "Black" },
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
  { value: "pink", label: "Pink" },
  { value: "brown", label: "Brown" },
  { value: "grey", label: "Grey" },
  { value: "cyan", label: "Cyan" },
  { value: "magenta", label: "Magenta" },
  { value: "teal", label: "Teal" },
  { value: "lavender", label: "Lavender" },
  { value: "maroon", label: "Maroon" },
  { value: "olive", label: "Olive" },
  { value: "salmon", label: "Salmon" },
  { value: "turquoise", label: "Turquoise" },
  { value: "gold", label: "Gold" },
  { value: "lime", label: "Lime" },
  { value: "indigo", label: "Indigo" },
  { value: "skyblue", label: "Sky Blue" },
  { value: "crimson", label: "Crimson" },
  { value: "sienna", label: "Sienna" },
  { value: "orchid", label: "Orchid" },
  { value: "slategray", label: "Slate Gray" },
  { value: "peru", label: "Peru" },
  { value: "coral", label: "Coral" },
  { value: "khaki", label: "Khaki" },
  { value: "navy", label: "Navy" },
  { value: "plum", label: "Plum" },
  { value: "seagreen", label: "Sea Green" },
  { value: "violet", label: "Violet" },
  { value: "darkorange", label: "Dark Orange" },
  { value: "darkslateblue", label: "Dark Slate Blue" },
  { value: "mediumspringgreen", label: "Medium Spring Green" },
  { value: "darkgoldenrod", label: "Dark Goldenrod" },
  { value: "mediumvioletred", label: "Medium Violet Red" },
  { value: "darkkhaki", label: "Dark Khaki" },
  { value: "darkorchid", label: "Dark Orchid" },
  { value: "mediumseagreen", label: "Medium Sea Green" },
  { value: "slateblue", label: "Slate Blue" },
  { value: "tomato", label: "Tomato" },
 
];



const backgroundColorOptions = [
  { value: "white", label: "White" },
  { value: "lightgrey", label: "Light Grey" },
  { value: "yellow", label: "Yellow" },
  { value: "cyan", label: "Cyan" },
  { value: "aliceblue", label: "Alice Blue" },
  { value: "antiquewhite", label: "Antique White" },
  { value: "aquamarine", label: "Aquamarine" },
  { value: "azure", label: "Azure" },
  { value: "beige", label: "Beige" },
  { value: "bisque", label: "Bisque" },
  { value: "blanchedalmond", label: "Blanched Almond" },
  { value: "blueviolet", label: "Blue Violet" },
  { value: "burlywood", label: "Burly Wood" },
  { value: "cadetblue", label: "Cadet Blue" },
  { value: "chartreuse", label: "Chartreuse" },
  { value: "chocolate", label: "Chocolate" },
  { value: "coral", label: "Coral" },
  { value: "cornflowerblue", label: "Cornflower Blue" },
  { value: "cornsilk", label: "Cornsilk" },
  { value: "crimson", label: "Crimson" },
  { value: "darkblue", label: "Dark Blue" },
  { value: "darkcyan", label: "Dark Cyan" },
  { value: "darkgoldenrod", label: "Dark Goldenrod" },
  { value: "darkgray", label: "Dark Gray" },
  { value: "darkgreen", label: "Dark Green" },
  { value: "darkkhaki", label: "Dark Khaki" },
  { value: "darkmagenta", label: "Dark Magenta" },
  { value: "darkolivegreen", label: "Dark Olive Green" },
  { value: "darkorange", label: "Dark Orange" },
  { value: "darkorchid", label: "Dark Orchid" },
  { value: "darkred", label: "Dark Red" },
  { value: "darksalmon", label: "Dark Salmon" },
  { value: "darkseagreen", label: "Dark Sea Green" },
  { value: "darkslateblue", label: "Dark Slate Blue" },
  { value: "darkslategray", label: "Dark Slate Gray" },
  { value: "darkturquoise", label: "Dark Turquoise" },
  { value: "darkviolet", label: "Dark Violet" },
  { value: "deeppink", label: "Deep Pink" },
  { value: "deepskyblue", label: "Deep Sky Blue" },
  { value: "dimgray", label: "Dim Gray" },
  { value: "dodgerblue", label: "Dodger Blue" },
  { value: "firebrick", label: "Fire Brick" },
  { value: "floralwhite", label: "Floral White" },
  { value: "forestgreen", label: "Forest Green" },
  { value: "gainsboro", label: "Gainsboro" },
  { value: "ghostwhite", label: "Ghost White" },
  { value: "gold", label: "Gold" },
  { value: "goldenrod", label: "Goldenrod" },
  { value: "greenyellow", label: "Green Yellow" },
  { value: "honeydew", label: "Honeydew" },
  { value: "hotpink", label: "Hot Pink" },
  { value: "indianred", label: "Indian Red" },
  { value: "ivory", label: "Ivory" },
  { value: "khaki", label: "Khaki" },
  { value: "lavender", label: "Lavender" },
  { value: "lavenderblush", label: "Lavender Blush" },
  { value: "lawngreen", label: "Lawn Green" },
  { value: "lemonchiffon", label: "Lemon Chiffon" },
  { value: "lightblue", label: "Light Blue" },
  { value: "lightcoral", label: "Light Coral" },
  { value: "lightcyan", label: "Light Cyan" },
  { value: "lightgoldenrodyellow", label: "Light Goldenrod Yellow" },
  { value: "lightgreen", label: "Light Green" },
  { value: "lightpink", label: "Light Pink" },
  { value: "lightsalmon", label: "Light Salmon" },
  { value: "lightseagreen", label: "Light Sea Green" },
  { value: "lightskyblue", label: "Light Sky Blue" },
  { value: "lightslategray", label: "Light Slate Gray" },
  { value: "lightsteelblue", label: "Light Steel Blue" },
  { value: "lightyellow", label: "Light Yellow" },
  { value: "lime", label: "Lime" },
  { value: "limegreen", label: "Lime Green" },
  { value: "linen", label: "Linen" },
  { value: "magenta", label: "Magenta" },
  { value: "mediumaquamarine", label: "Medium Aquamarine" },
  { value: "mediumblue", label: "Medium Blue" },
  { value: "mediumorchid", label: "Medium Orchid" },
  { value: "mediumpurple", label: "Medium Purple" },
  { value: "mediumseagreen", label: "Medium Sea Green" },
  { value: "mediumslateblue", label: "Medium Slate Blue" },
  { value: "mediumspringgreen", label: "Medium Spring Green" },
  { value: "mediumturquoise", label: "Medium Turquoise" },
  { value: "mediumvioletred", label: "Medium Violet Red" },
  { value: "midnightblue", label: "Midnight Blue" },
  { value: "mintcream", label: "Mint Cream" },
  { value: "mistyrose", label: "Misty Rose" },
  { value: "moccasin", label: "Moccasin" },
  { value: "navajowhite", label: "Navajo White" },
  { value: "oldlace", label: "Old Lace" },
  { value: "olivedrab", label: "Olive Drab" },
  { value: "orangered", label: "Orange Red" },
  { value: "palegoldenrod", label: "Pale Goldenrod" },
  { value: "palegreen", label: "Pale Green" },
  { value: "paleturquoise", label: "Pale Turquoise" },
  { value: "palevioletred", label: "Pale Violet Red" },
  { value: "papayawhip", label: "Papaya Whip" },
  { value: "peachpuff", label: "Peach Puff" },
  { value: "peru", label: "Peru" },
  { value: "powderblue", label: "Powder Blue" },
  { value: "rosybrown", label: "Rosy Brown" },
  { value: "royalblue", label: "Royal Blue" },
  { value: "saddlebrown", label: "Saddle Brown" },
  { value: "salmon", label: "Salmon" },
  { value: "sandybrown", label: "Sandy Brown" },
  { value: "seashell", label: "Seashell" },
  { value: "silver", label: "Silver" },
  { value: "skyblue", label: "Sky Blue" },
  { value: "slateblue", label: "Slate Blue" },
  { value: "slategray", label: "Slate Gray" },
  { value: "snow", label: "Snow" },
  { value: "springgreen", label: "Spring Green" },
  { value: "steelblue", label: "Steel Blue" },
  { value: "tan", label: "Tan" },
  { value: "thistle", label: "Thistle" },
  { value: "tomato", label: "Tomato" },
  { value: "turquoise", label: "Turquoise" },
  { value: "violet", label: "Violet" },
  { value: "wheat", label: "Wheat" },
  { value: "whitesmoke", label: "White Smoke" },
  { value: "yellowgreen", label: "Yellow Green" },

];


const fontFamilyOptions = [
  { value: "'Times New Roman', Times, serif", label: "Times New Roman" },
  { value: "'Arial', sans-serif", label: "Arial" },
  { value: "'Georgia', serif", label: "Georgia" },
  { value: "'Courier New', Courier, monospace", label: "Courier New" },
  { value: "'Palatino Linotype', 'Book Antiqua', Palatino, serif", label: "Palatino Linotype" },
  { value: "'Lucida Bright', Georgia, serif", label: "Lucida Bright" },
  { value: "'Trebuchet MS', Helvetica, sans-serif", label: "Trebuchet MS" },
  { value: "'Verdana', Geneva, sans-serif", label: "Verdana" },
  { value: "'Impact', Charcoal, sans-serif", label: "Impact" },
  { value: "'Bookman Old Style', serif", label: "Bookman Old Style" },
  { value: "'Garamond', serif", label: "Garamond" },
  { value: "'Arial Black', Gadget, sans-serif", label: "Arial Black" },
  { value: "'Comic Sans MS', cursive", label: "Comic Sans MS" },
  { value: "'Century Gothic', sans-serif", label: "Century Gothic" },
  { value: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", label: "Franklin Gothic Medium" },
  { value: "'Copperplate', Copperplate Gothic Light, sans-serif", label: "Copperplate" },
  { value: "'Helvetica', 'Arial Narrow', Arial, sans-serif", label: "Helvetica" },
  { value: "'Tahoma', Geneva, sans-serif", label: "Tahoma" },
  { value: "'Geneva', Tahoma, sans-serif", label: "Geneva" },
  { value: "'Optima', sans-serif", label: "Optima" },
  { value: "'Calibri', Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif", label: "Calibri" },
  { value: "'Baskerville', 'Palatino Linotype', Palatino, 'Century Schoolbook', serif", label: "Baskerville" },
  { value: "'Futura', 'Trebuchet MS', Arial, sans-serif", label: "Futura" },
  { value: "'Arial Narrow', sans-serif", label: "Arial Narrow" },
  { value: "'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif", label: "Lucida Grande" },
  { value: "'Rockwell', 'Courier Bold', Courier, Georgia, Times, serif", label: "Rockwell" },
  { value: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif", label: "Gill Sans" },
  { value: "'Myriad Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", label: "Myriad Pro" },
  { value: "'Century Schoolbook', 'Times New Roman', Times, serif", label: "Century Schoolbook" },
  { value: "'Arial Rounded MT Bold', sans-serif", label: "Arial Rounded MT Bold" },
  { value: "'Courier', 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace", label: "Courier" },
  { value: "'Candara', 'Trebuchet MS', Arial, sans-serif", label: "Candara" },
  { value: "'Andale Mono', 'Courier New', Courier, monospace", label: "Andale Mono" },
  { value: "'Monaco', 'Lucida Console', monospace", label: "Monaco" },
  { value: "'Consolas', 'Lucida Console', Monaco, monospace", label: "Consolas" },
  { value: "'Arial Unicode MS', 'Lucida Grande', sans-serif", label: "Arial Unicode MS" },
  { value: "'Lato', 'Arial', sans-serif", label: "Lato" },
  { value: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif", label: "Roboto" },
  { value: "'Open Sans', sans-serif", label: "Open Sans" },
  { value: "'Montserrat', sans-serif", label: "Montserrat" },
  { value: "'Raleway', sans-serif", label: "Raleway" },
  { value: "'PT Sans', sans-serif", label: "PT Sans" },
  { value: "'Source Sans Pro', sans-serif", label: "Source Sans Pro" },
  { value: "'Noto Sans', sans-serif", label: "Noto Sans" },
  { value: "'Oswald', sans-serif", label: "Oswald" },
  { value: "'Roboto Condensed', sans-serif", label: "Roboto Condensed" },
  { value: "'Playfair Display', serif", label: "Playfair Display" },
  { value: "'Merriweather', serif", label: "Merriweather" },
  { value: "'Libre Baskerville', serif", label: "Libre Baskerville" },
  { value: "'PT Serif', serif", label: "PT Serif" },
  { value: "'Crimson Text', serif", label: "Crimson Text" },
  { value: "'Roboto Slab', serif", label: "Roboto Slab" },
  { value: "'Arimo', sans-serif", label: "Arimo" },
  { value: "'Ubuntu', sans-serif", label: "Ubuntu" },
  { value: "'Exo', sans-serif", label: "Exo" },
  { value: "'Poppins', sans-serif", label: "Poppins" },
  { value: "'Nunito', sans-serif", label: "Nunito" },
  { value: "'Karla', sans-serif", label: "Karla" },
  { value: "'Hind', sans-serif", label: "Hind" },
  { value: "'Fira Sans', sans-serif", label: "Fira Sans" },
  { value: "'Bebas Neue', cursive", label: "Bebas Neue" },
  { value: "'Pacifico', cursive", label: "Pacifico" },
  { value: "'Dancing Script', cursive", label: "Dancing Script" },
  { value: "'Great Vibes', cursive", label: "Great Vibes" },
  { value: "'Cookie', cursive", label: "Cookie" },
  { value: "'Kaushan Script', cursive", label: "Kaushan Script" },
  { value: "'Indie Flower', cursive", label: "Indie Flower" },
  { value: "'Shadows Into Light', cursive", label: "Shadows Into Light" },
  { value: "'Architects Daughter', cursive", label: "Architects Daughter" },
  { value: "'Patrick Hand', cursive", label: "Patrick Hand" },
  { value: "'Permanent Marker', cursive", label: "Permanent Marker" },
  { value: "'Amatic SC', cursive", label: "Amatic SC" },
  { value: "'Lobster', cursive", label: "Lobster" },
  { value: "'Caveat', cursive", label: "Caveat" },
  { value: "'Sacramento', cursive", label: "Sacramento" },
  { value: "'Courgette', cursive", label: "Courgette" },
  { value: "'Pacifico', cursive", label: "Pacifico" },
  { value: "'Yellowtail', cursive", label: "Yellowtail" },
  { value: "'Grand Hotel', cursive", label: "Grand Hotel" },
  { value: "'Playball', cursive", label: "Playball" },
  { value: "'Homemade Apple', cursive", label: "Homemade Apple" },
  { value: "'Dosis', sans-serif", label: "Dosis" },
  { value: "'Archivo', sans-serif", label: "Archivo" },
  { value: "'Josefin Sans', sans-serif", label: "Josefin Sans" },
  { value: "'Oxygen', sans-serif", label: "Oxygen" },
  { value: "'Asap', sans-serif", label: "Asap" },
  { value: "'Alegreya Sans', sans-serif", label: "Alegreya Sans" },
  { value: "'Acme', sans-serif", label: "Acme" },
  { value: "'Catamaran', sans-serif", label: "Catamaran" },
  { value: "'Barlow', sans-serif", label: "Barlow" },
  { value: "'Muli', sans-serif", label: "Muli" },
  { value: "'Merriweather Sans', sans-serif", label: "Merriweather Sans" },
  { value: "'Quicksand', sans-serif", label: "Quicksand" },
  { value: "'Rajdhani', sans-serif", label: "Rajdhani" },
  { value: "'Rubik', sans-serif", label: "Rubik" },
  { value: "'Nunito Sans', sans-serif", label: "Nunito Sans" },
  { value: "'Baloo', cursive", label: "Baloo" },
  { value: "'Varela Round', sans-serif", label: "Varela Round" },
  { value: "'Maven Pro', sans-serif", label: "Maven Pro" },
  { value: "'Biryani', sans-serif", label: "Biryani" },
  { value: "'Lora', serif", label: "Lora" },
  { value: "'Abril Fatface', cursive", label: "Abril Fatface" },
  { value: "'Cormorant', serif", label: "Cormorant" },
  { value: "'Cinzel', serif", label: "Cinzel" },
  { value: "'EB Garamond', serif", label: "EB Garamond" },
  { value: "'Playfair Display', serif", label: "Playfair Display" },
  { value: "'Amiri', serif", label: "Amiri" },
  { value: "'Crimson Pro', serif", label: "Crimson Pro" },
  { value: "'Inria Serif', serif", label: "Inria Serif" },
  { value: "'Josefin Slab', serif", label: "Josefin Slab" },
  { value: "'Bree Serif', serif", label: "Bree Serif" },
  { value: "'Philosopher', sans-serif", label: "Philosopher" },
  { value: "'Quattrocento', serif", label: "Quattrocento" },
  { value: "'PT Serif Caption', serif", label: "PT Serif Caption" },
  { value: "'Fjalla One', sans-serif", label: "Fjalla One" },
  { value: "'Candal', sans-serif", label: "Candal" },
  { value: "'Cutive Mono', monospace", label: "Cutive Mono" },
  { value: "'Source Code Pro', monospace", label: "Source Code Pro" },
  { value: "'IBM Plex Mono', monospace", label: "IBM Plex Mono" },
  { value: "'Nova Mono', monospace", label: "Nova Mono" },
  { value: "'Anonymous Pro', monospace", label: "Anonymous Pro" },
  { value: "'Ubuntu Mono', monospace", label: "Ubuntu Mono" },
  { value: "'PT Mono', monospace", label: "PT Mono" },
  { value: "'Fira Mono', monospace", label: "Fira Mono" },
  { value: "'Overpass Mono', monospace", label: "Overpass Mono" },
  { value: "'Droid Sans Mono', monospace", label: "Droid Sans Mono" },
  { value: "'Hack', monospace", label: "Hack" },
  { value: "'Space Mono', monospace", label: "Space Mono" },
  { value: "'VT323', monospace", label: "VT323" },
  { value: "'Roboto Mono', monospace", label: "Roboto Mono" },
  { value: "'IBM Plex Sans', sans-serif", label: "IBM Plex Sans" },
  { value: "'Inconsolata', monospace", label: "Inconsolata" },
  { value: "'Andika', sans-serif", label: "Andika" },
  { value: "'Nanum Gothic', sans-serif", label: "Nanum Gothic" },
  { value: "'Nanum Myeongjo', serif", label: "Nanum Myeongjo" },
  { value: "'Do Hyeon', sans-serif", label: "Do Hyeon" },
  { value: "'East Sea Dokdo', cursive", label: "East Sea Dokdo" },
  { value: "'Gamja Flower', cursive", label: "Gamja Flower" },
  { value: "'Gaegu', cursive", label: "Gaegu" },
  { value: "'Gugi', sans-serif", label: "Gugi" },
  { value: "'Jua', sans-serif", label: "Jua" },
  { value: "'Gothic A1', sans-serif", label: "Gothic A1" },
  { value: "'Jeju Gothic', sans-serif", label: "Jeju Gothic" },
  { value: "'Noto Sans KR', sans-serif", label: "Noto Sans KR" },
  { value: "'Poor Story', cursive", label: "Poor Story" },
  { value: "'Sunflower', sans-serif", label: "Sunflower" },
  { value: "'Yeon Sung', cursive", label: "Yeon Sung" },
  { value: "'Yeon Sung', cursive", label: "Yeon Sung" },
  
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
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
    backgroundColorOptions[0]
  );
  const [selectedFontFamily, setSelectedFontFamily] = useState(
    fontFamilyOptions[0]
  );

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

  const handleStyleChange = () => {
    // Handle style change logic here if needed
    // Directly update the selectedColor, selectedBackgroundColor, selectedFontFamily states
    setSelectedColor(colorOptions.find((opt) => opt.value === selectedColor.value));
    setSelectedBackgroundColor(backgroundColorOptions.find((opt) => opt.value === selectedBackgroundColor.value));
    setSelectedFontFamily(fontFamilyOptions.find((opt) => opt.value === selectedFontFamily.value));
  };
  const handleDownload = async () => {
    const previewElement = document.querySelector(".preview-container");

    switch (selectedFormat.value) {
     
      case "pdf":
        // Capture the preview element as a canvas
        const canvasPDF = await html2canvas(previewElement, { scale: 2 });
      
        // Create an image from the canvas
        const imgData = canvasPDF.toDataURL("image/png");
      
        // Calculate the dimensions of the PDF page
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
      
        // Add the image to the PDF, starting from the top-left corner
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
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
        <h1 id='color'><strong><em>Resume Builder</em></strong></h1>
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
        <div className="style-options">
          <div className="style-label">Font Color:</div>
          <Select id='options'
            options={colorOptions}
            defaultValue={selectedColor}
            onChange={setSelectedColor}
            classNamePrefix="custom-select"
            className="style-select"
          />
          <div className="style-label">Background Color:</div>
          <Select id='options'
            options={backgroundColorOptions}
            defaultValue={selectedBackgroundColor}
            onChange={setSelectedBackgroundColor}
            classNamePrefix="custom-select"
            className="style-select"
          />
          <div className="style-label">Font Family:</div>
          <Select id='options'
            options={fontFamilyOptions}
            defaultValue={selectedFontFamily}
            onChange={setSelectedFontFamily}
            classNamePrefix="custom-select"
            className="style-select"
          />
          
        </div>
      </div>
      <div className="form-container">
        {activeSection === "Personal Information" && (
          <PersonalInformationForm
            data={resumeData.personalInformation}
            onUpdate={(data) => handleUpdate("personalInformation", data)}
          />
        )}
        {activeSection === "Education" && (
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
        )}
        {activeSection === "Experience" && (
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
        )}
        {activeSection === "Award/Certification" && (
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
        )}
        
        <button type="button" className="next-button" onClick={handleNext}>
          Next Section
        </button>
        <div className="download-options">
        
        <Select
          options={downloadOptions}
          defaultValue={selectedFormat}
          onChange={setSelectedFormat}
          classNamePrefix="custom-select"
          className="style-select"
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
      
      <div className="preview-Container" >
        <ResumePreview 
          data={resumeData}
          selectedColor={selectedColor}
          selectedBackgroundColor={selectedBackgroundColor}
          selectedFontFamily={selectedFontFamily}
        />
      </div>
      
    </div>
  );
}

export default Resume;
