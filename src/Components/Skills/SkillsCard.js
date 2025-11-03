import React from "react";
import "./SkillsCard.css";

const SkillsCard = (props) => {
  return (
    <div className="skills_card">
      <h2>{props.data.category}</h2>
      <div className="skills_container">
        {props.data.skills.map((entry) => (
          <div className="skill_item">
            <div className="skill_img">
              <i className={entry.icon} />
            </div>
            <h3>{entry.tech}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
