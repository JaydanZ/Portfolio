import "./ExperienceBody.css";

const ExperienceBody = (props) => {
  const { job } = props;

  const mobile_window_width = 900;
  const isMobile = window.innerWidth <= mobile_window_width ? true : false;

  const jobAcomplishments =
    isMobile && job.mobileAcomplishments
      ? job.mobileAcomplishments
      : job.acomplishments;

  return (
    <div className="experience_body_container">
      <div className="experience_body_header">
        <div className="experience_title">{job.jobTitle}</div>
        <div className="experience_dates_container">
          <div className="job_dates">
            {job.startDate} - {job.endDate}
          </div>
        </div>
      </div>
      <div className="experience_body">
        <div className="experience_role">{job.jobRole}</div>
        <div className="experience_tech_container">
          {job.technologies.map((tech) => (
            <h2>{tech}</h2>
          ))}
        </div>
        <hr className="body-divider" />
        <div className="experience_acomplishments_container">
          {jobAcomplishments.map((acomplishment) => (
            <h2>
              <span>- </span>
              {acomplishment}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceBody;
