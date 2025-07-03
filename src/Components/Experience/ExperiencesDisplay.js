import "./ExperiencesDisplay.css";
import ExperienceBody from "./ExperienceBody";

const ExperiencesDisplay = (props) => {
  return (
    <div className="experiences_display_container">
      <div className="job_container">
        {props.experiences.map((job) => (
          <ExperienceBody job={job} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencesDisplay;
