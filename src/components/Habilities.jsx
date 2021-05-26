import React from "react";
import { habilitiesData } from "../Constants";
import Progress from "./Progress";

const Habilities = ({ title }) => {
  return (
    <div className="block-container">
      <h2>{title}</h2>
      <div className="habilities-container">
        {habilitiesData.map((element) => (
          <Progress title={element.title} value={element.value} />
        ))}
      </div>
    </div>
  );
};

export default Habilities;
