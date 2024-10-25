import { FaGithub, Fa} from 'react-icons/fa';
import './Project.css';

const data = [
  {
    title: 'Nutricheck',
    link: 'https://github.com/Amarnath-Rao/NutriCheck',
    icon: FaGithub,
    description: 'NutriCheck is an all-encompassing health platform designed to seamlessly connect with popular health applications. It comprises three primary functions: KCalc for monitoring food intake and syncing with Google Fit, WeatherBite for delivering personalized dietary suggestions considering location and health factors, and VitalScan for the storage and visualization of health-related reports.',
    skills: [
      'ReactJS',
      'MERN',
      'API',
      'Google Cloud'
    ]
  },
  {
    title: 'VibeHub',
    link: 'https://github.com/Amarnath-Rao/VibeHub-SocialMediaApp',
    icon: FaGithub,
    description: 'Comprehensive full-stack social media platform developed using MongoDB, Flask, and React for real-time user interactions and content sharing. Key features include user authentication with JWT and OAuth, post creation, comments, and a like system, enhancing user engagement by 85%. Utilizes RESTful APIs for efficient data management.',
    skills: [
      'MongoDB',
      'Flask',
      'React',
      'JWT',
      'OAuth',
      'RESTful APIs'
    ]
  },
  {
    title: 'University Admission Prediction',
    link: 'https://github.com/Amarnath-Rao/S5-19CSE305-ML-PROJECT',
    icon: FaGithub,
    description: 'A machine learning model comparison project that evaluates predictive accuracy for university admissions. The project preprocesses over 10,000 student records, optimizing features for model training. Achieved 99% accuracy using Gradient Boosting, SVM, and Naive Bayes. Evaluated models using metrics like ROC-AUC and precision-recall.',
    skills: [
      'Machine Learning',
      'Gradient Boosting',
      'SVM',
      'Naive Bayes',
      'Scikit-learn',
      'XGBoost'
    ]
  },
  {
    title: 'Market Insights',
    link: 'https://github.com/Amarnath-Rao/Market-Insights',
    icon: FaGithub,
    description: 'Real-time data analytics platform deployed on Azure using Kubernetes and integrated with Apache Kafka for real-time data ingestion. Designed for high scalability and automated response times under 500ms, with monitoring through Azure Monitor and Grafana for actionable insights.',
    skills: [
      'Azure',
      'Kubernetes',
      'Apache Kafka',
      'Grafana',
      'Azure Monitor'
    ]
  },
  {
    title: 'NFT Marketplace',
    link: 'https://github.com/Amarnath-Rao/NFT-Marketplace',
    icon: FaGithub,
    description: 'Decentralized application for NFT transactions, leveraging Ethereum smart contracts with Solidity for secure blockchain interactions. Integrated Web3.js and MetaMask for user interactions and low-fee transactions, featuring a React-based frontend for a responsive and real-time experience.',
    skills: [
      'Ethereum',
      'Solidity',
      'Web3.js',
      'MetaMask',
      'Hardhat',
      'Truffle'
    ]
  },
  {
    title: 'EduAid - AI Academic Prep',
    link: 'https://www.linkedin.com/posts/n-amarnath-rao_pegasus2-hackathonsuccess-techinnovation-activity-7171836116923236355-Z5j1?utm_source=share&utm_medium=member_desktop', // Update with specific LinkedIn link if available
    icon: FaGithub,
    description: 'EduAid is an AI-driven platform hosted on GCP, leveraging Generative AI and speech recognition to revolutionize last-minute academic preparations. The platform enhances understanding of complex concepts, providing efficient solutions for students while ensuring scalability and quick access.',
    skills: [
      'Generative AI',
      'GCP',
      'Speech Recognition',
      'Scalability',
      'MERN'
    ]
  }
  
];


function Project() {
  return (
    <div>
        <div className='part_title'>Projects</div>
        <div className='project_container' id='project'>
          <div className='project_grid'>
            {data.map((project, index) => (
              <div key={index} className='project_card'>
                <a href={project.link} className='project_link' target='_blank'>
                  {project.icon && <project.icon className='icon' />}  {project.stars && ' ☆' + project.stars}
                  <div className='project_title'>
                    {project.title}
                  </div>
                </a>
                <div className='project_description'>{project.description}</div>
                <div className='project_skills'>
                  {project.skills.map((skill, index) => (
                    <span key={index} className='skill'>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Project;
