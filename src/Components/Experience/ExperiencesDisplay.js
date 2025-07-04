import "./ExperiencesDisplay.css";
import ExperienceBody from "./ExperienceBody";

const ExperiencesDisplay = (props) => {
  return (
    <div className="experiences_display_container">
      <div className="job_container_boundary">
        <div className="job_path_bar"></div>
        <div className="job_container">
          {props.experiences.map((job) => (
            <ExperienceBody job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesDisplay;
