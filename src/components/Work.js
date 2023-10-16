import React from 'react';
import './Work.css';

const data = [
  {
    logo: "https://media.licdn.com/dms/image/C560BAQFgHU3sTF4LfQ/company-logo_200_200/0/1519895156650?e=2147483647&v=beta&t=e6J4j8gWdNCJ-Dhu6xEC2S3EB_6lcim27ymu6-zRQkg",
    company: "The Sparks Foundation",
    position: "Data Science & Business Analytics intern",
    startDate: "Sept 2023",
    endDate: "Oct 2023",
    description: ["- Proficiently constructing, evolving, and documenting AI/ML models centered around data to support student learning, with a strong emphasis on transparency and comprehensible explanations.", " - Exploring the practical applications of AI/ML technology across diverse industries, encompassing healthcare, finance, manufacturing, agriculture, logistics, and transportation."," - Collaborating with reputed university faculty and subject matter experts to continuously enhance and modify the curriculum covering AI, ML, Data Science,IoT, and Python programming for the non-technical global youth audience."],
    technologies: ["Python", "APIs", "Tensorflow"],
    url: "https://www.thesparksfoundationsingapore.org/"
  },
  {
    logo: "data:image/png;base64,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",
    company: "Microsoft",
    position: "Cybersecurity Engage 2022 mentee",
    startDate: "May 2022",
    endDate: "July 2022",
    description: ["- Proficiently analyzed and dissected malicious software, identifying vulnerabilities and potential threats to enhance overall system security.","- Proficiently analyzed and dissected malicious software, identifying vulnerabilities and potential threats to enhance overall system security.", "- Proficiently analyzed and dissected malicious software, identifying vulnerabilities and potential threats to enhance overall system security."],
    technologies: ["Reverse Engineerign", "Cybersecurity", "Malware Detection"],
    url: "https://careers.microsoft.com/v2/global/en/home.html"
  },
  {
    logo: "data:image/png;base64,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",
    company: "Microsoft",
    position: "Microsoft Learn Student Ambassador",
    startDate: "July 2023",
    endDate: "Present",
    description: ["- Spearheaded collaborative initiatives with students from diverse cultural backgrounds worldwide, fostering a global community of learners passionate about AI and cloud computing.","- Demonstrated exceptional soft skills, leadership, and communication abilities while coordinating and moderating virtual events, workshops, and knowledge-sharing sessions.","- Effectively conveyed complex AI and Azure concepts to a broad audience, simplifying technical topics for enhanced comprehension."],
    technologies: ["Azure", "AI"],
    url: "https://mvp.microsoft.com/studentambassadors"
  },
  {
    logo: "https://media.licdn.com/dms/image/C560BAQHbRc4KalclmA/company-logo_200_200/0/1676715856930?e=2147483647&v=beta&t=dfIZWOm5EYgzqbVy_ccNBSpX8hiN9ywsq-V0oCd9H0M",
    company: "TechnoHacks EduTech",
    position: "Data Science Intern",
    startDate: "Aug 2023",
    endDate: "Sept 2023",
    description: ["- Demonstrated proficiency in utilizing various data science frameworks and libraries, including but not limited to Pandas, NumPy, and Scikit-learn, to build predictive models and perform exploratory data analysis (EDA).","- Demonstrated proficiency in utilizing various data science frameworks and libraries, including but not limited to Pandas, NumPy, and Scikit-learn, to build predictive models and perform exploratory data analysis (EDA).","- Demonstrated proficiency in utilizing various data science frameworks and libraries, including but not limited to Pandas, NumPy, and Scikit-learn, to build predictive models and perform exploratory data analysis (EDA)."],
    technologies: ["Python", "Data Science", "Computer Vision"],
    url:""
  }
];

function Work() {
  return (
    <div>
      <div className='part_title'>
        Work Experiences
      </div>
      <section id='work' className="timeline">
        <ul>
          {data.map((experience, index) => (
            <li key={index}>
              <div className="timeline-card">
                <div className="timeline-icon">
                  <img src={experience.logo} alt={experience.company} />
                  <p className="date">{`${experience.startDate} - ${experience.endDate}`}</p>
                </div>
                <div className="timeline-text">
                    <p className='company'>
                      <a href={experience.url} target="_blank">
                        {experience.company}
                      </a>
                    </p>
                    <p className="position">{experience.position}</p>
                    <div className="description">
                      {experience.description.map((desc, index) => (
                          <p key={index}>{desc}</p>
                      ))}
                    </div>
                    <p className="technology_stack">
                      {experience.technologies.map((skill) => (
                        <div className='techstack_tag'>
                          {skill}
                        </div>
                      ))}
                    </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Work;
