import React from "react";
import "css/toggleButton.css";

const ToggleButton = (props) => {
  const { active, onClick } = props;
  return (
    <div className="toggle-button " onClick={onClick}>
      <div className="toggle-circle-container">
        <div className={`toggle-circle ${active ? "active" : ""}`} />
      </div>
    </div>
  );
};

export default ToggleButton;
