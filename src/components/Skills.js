import React from 'react';
import './Skills.css';

const data = [
    {
        title: 'Core',
        grid: 'core',
        skill: ['R','Keras','Pandas','Numpy','Jupyterlabs','ORANGE 3','sklearn','streamlit','Tensorflow','OpenCV','selenium','Flask','Heroku']
    },
    {
        title: 'Framework',
        grid: 'framework',
        skill: ['SpringBoot', 'React', 'Express', 'Node.js', 'Django']
    },
    {
        title: 'DevOps',
        grid: 'devops',
        skill: ['Azure', 'AWS', 'Git', 'Docker', 'Kubernetes', 'Jenkins', 'Github Actions', 'Nginx', 'Linux']
    },
    {
        title: 'Programming Language',
        grid: 'pl',
        skill: ['Python', 'Java', 'C++',  'JavaScript',]
    },
    {
        title: 'Database',
        grid: 'db',
        skill: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
];

function Skills() {
  return (
    <div>
        <div className='part_title'>
            Skills
        </div>
        <div id="skills" className="skills">
        {data.map((tech) => (
            <div className="skills__container" style={{ gridArea: tech.grid }} key={tech.grid}>
            <div className="skills__header">{tech.title}</div>
            <ul className="skills__list">
                {tech.skill.map((skill, index) => (
                <li className="skills__list-item" key={index}>{skill}</li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Skills;
