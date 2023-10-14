import './Education.css'

const data = [
    {
        university: "Amrita Vishwa Vidyapeetham",
        majors: "B.Tech. Computer Science",
        from: "2021/09",
        to: "present",
        logo: "https://yt3.ggpht.com/a/AATXAJyYBtKqqQySLlrCcKLXDak_APag8ydoE1JjFg=s900-c-k-c0xffffffff-no-rj-mo",
        link: "https://www.amrita.edu/"
    },
    {
        university: "Aakash Institute",
        majors: "Intermediate MPC", 
        from: "2021/05",
        to: "2019/05",
        logo: "https://adyanthighersecondaryschool.org/wp-content/uploads/2022/08/Aakash-logo.jpg",
        link: "https://www.aakash.ac.in/"
        
    },
    {
        university: "Narayana School",
        majors: "High School",
        from: "2019/04",
        to: "2018/05",
        logo: "https://content3.jdmagicbox.com/comp/kurnool/w1/9999p8518.8518.140211204920.r6w1/catalogue/narayana-e-techno-school-old-town-kurnool-narayana-schools-0lgqrbnjws.jpg",
        link: "https://www.narayanaschools.in/"
    }
];

function Education(params) {
    return (
        <div>
            <div className='part_title'>
                Education
            </div>
            <div id="education" className="education">
                {data.map((education, index) => (
                    <div className="education__container" key={index}>
                        <div className="education__logo">
                            <img src={education.logo} alt={education.university} />
                            </div>
                        <div className="education__details">
                            <a href={education.link} target="_blank" rel="noopener noreferrer">
                                <h3>{education.university}</h3>
                            </a>
                            <p>{education.majors}</p>
                            <p>{education.from} - {education.to}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;