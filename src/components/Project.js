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
    title: 'Voucherize',
    stars: 2,
    link: 'https://github.com/Amarnath-Rao/Voucherize',
    icon: FaGithub,
    description: 'Our blockchain DApp for the vouchers marketplace in our Digital Transformation initiative allows users to buy and sell vouchers seamlessly. Users can browse, purchase, and list vouchers of various types, all with their unique values and benefits. Trust and efficiency are guaranteed as users upload voucher listings via IPFS, ensuring fast, transparent, and secure transactions while optimizing resource utilization. In essence, our DApp provides a secure and efficient marketplace for buying and selling vouchers in a decentralized environment.',
    skills: [
      'Solidity',
      'ReactJS',
      'Hardhat',
      'Polygon',
      'Ethereum',
      'IPFS'
    ]
  },
  {
    title: 'Face Detection',
    icon: FaGithub,
    link: 'https://github.com/Amarnath-Rao/FaceDetection-Age-Gender_PythonML',
    description: 'Face detection system that accurately identifies an individuals gender and estimates their age in real-time. This technology offers versatile applications in marketing, security, entertainment, and healthcare, making it a valuable tool for various industries.',
    skills: [
      'Python',
      'OpenCV',
      'Numpy',
    ]
  },
  {
    title: 'Social Media App',
    icon: FaGithub,
    link: 'https://github.com/Amarnath-Rao/Social-Media-App-Prototype',
    description: 'Dynamic social media platform built with the MERN (MongoDB, Express, React, Node.js) stack. This web application offers users a feature-rich experience for connecting, sharing, and engaging with friends and communities online. Key features include user profiles, posts and feeds, friend requests, likes and comments, notifications, search and discovery, chat and messaging, and robust privacy controls.',
    skills: [
      'MongoDB',
      'React',
      'Express',
      'Node.js',
    ]
  },
  {
    title: 'Fake News Detector',
    icon: FaGithub,
    link: 'https://github.com/Amarnath-Rao/Fake-News-Detection',
    description: 'This project addresses the pressing issue of fake news by developing an automated detection system using Python, Pandas, and NumPy. We collect a diverse dataset of news articles, employ feature extraction techniques with Pandas and NumPy, and utilize machine learning models for accurate identification. Through rigorous validation and testing, our system offers real-time fake news classification, contributing to a more informed online landscape.',
    skills: [
      'Python',
      'Pandas',
      'Numpy'
    ]
  },
  {
    title: 'AutoMobile Company',
    icon: FaGithub,
    link: 'https://github.com/Amarnath-Rao/AutoMobile-Company-Project',
    description: 'The Automobile Company Project combines Java Swing for the front-end and PostgreSQL as the back-end database. This software solution simplifies operations, including inventory management, sales tracking, and customer relationship management within an automobile company. Java Swing provides an intuitive user interface, while PostgreSQL ensures secure data storage. The project enhances efficiency, streamlining workflow processes and boosting productivity within the company.',
    skills: [
      'Java',
      'SQL',
      'Swing'
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
