import React from "react";
import PropTypes from "prop-types";
import "./TemplateSelector.css";

function TemplateSelector({ templates, onSelect }) {
  return (
    <div className="template-options">
      {templates.map((template) => (
        <div
          key={template.id}
          className="template-option"
          onClick={() => onSelect(template)}
        >
          {template.name}
        </div>
      ))}
    </div>
  );
}

TemplateSelector.propTypes = {
  templates: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TemplateSelector;

