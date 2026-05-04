import React from "react";
import "../Skills/styles.css";
import Icons from "../../assets/icons.json";
import Icon from "../Icon";

const Skills = () => {
  return (
    <div>
      <div className="nes-container is-rounded" id="skillsContainer">
        <h1>Skills</h1>
        <p>Tools and technologies I work with daily</p>
        {Icons.map((icon, i) => (
          <Icon key={i} {...icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
