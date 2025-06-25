import "./ExperienceBody.css";

const ExperienceBody = (props) => {
  const { job } = props;

  return (
    <div className="experience_body_container">
      <div className="experience_body_header">
        <div className="experience_title">{job.jobTitle}</div>
        <div className="experience_dates_container">
          <div className="job_start_date">{job.startDate}</div>
          <div className="job_end_date">{job.endDate}</div>
        </div>
      </div>
      <div className="experience_body">
        <div className="experience_role"></div>
        <div className="experience_tech_container">
          {job.technologies.map((tech) => (
            <div>{tech}</div>
          ))}
        </div>
        <div className="experience_acomplishments_container">
          {job.acomplishments.map((acomplishment) => (
            <div>{acomplishment}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceBody;
