import React from "react";

const Progress = ({ title, value }) => {
  let width = `width: ${value}`;
  return (
    <div className="progress-container">
      <h4>{title}</h4>
      <div className="progress-bar">
        <div className="filled" style={{ width: value + "%" }}></div>
      </div>
    </div>
  );
};

export default Progress;
