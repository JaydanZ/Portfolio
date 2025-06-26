import "./ExperiencesDisplay.css";
import ExperienceBody from "./ExperienceBody";

const ExperiencesDisplay = (props) => {
  return (
    <div className="experiences_display_container">
      {props.experiences.map((job) => (
        <ExperienceBody job={job} />
      ))}
    </div>
  );
};

export default ExperiencesDisplay;
