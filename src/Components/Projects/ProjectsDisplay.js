import ProjectBody from "./ProjectBody";
import "./ProjectsDisplay.css";

const ProjectsDisplay = (props) => {
  return (
    <div className="project_display_container">
      <div className="project_display">
        {props.projectArr.map((entry, index) => (
          <ProjectBody
            projectNum={"0" + (index + 1) + ". "}
            projectHeader={entry.projectName}
            projectBody={entry.projectBody}
            projectRole={entry.projectRole}
            projectStack={entry.projectStack}
            projectLinks={entry.projectLinks}
            projectGithub={entry.projectGithub}
            projectDemo={entry.projectDemo}
            projectMockup={entry.mockup}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsDisplay;
