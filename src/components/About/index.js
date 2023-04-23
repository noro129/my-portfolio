import './index.scss';
import AnimatedLetters from '../animatedLetters';

const About = () => {



    return (
        <div className="about-page">
            <div className="my-name">
                <h1>
                    <AnimatedLetters letterClass={`text-animate`}
                        strArray={['E','R','R','A','Z','I',' ','O','u','s','s','a','m','a']} idx={1}/>
                </h1>
                <p>I am second year software engineering student at ENSIAS</p>
            </div>
            <div className="education-section sections">
                <h1 className="sub-section-title">Education :</h1>
                <div className="education">
                <p className="sector">Software engineering student (GL),</p>
                <p className="school">National School of Computer Science and Systems Analysis (ENSIAS)</p>
                <p className="date-location">Sep 2021 – present | @ Rabat</p>
                </div>
                <div className="education">
                <p className="sector">Mathematics and Physics (MP),</p>
                <p className="school">Preparatory Classes for Engineering Schools Reda Slaoui (CPGE)</p>
                <p className="date-location">Sep 2019 – Jun 2021 | @ Agadir</p>
                </div>
            </div>
            <div className="professional-experience-section sections">
                <h1 className="sub-section-title">Professional Experience :</h1>
                <div className="professional-experience">
                    <p className="role">Artificial intelligence developer intern</p>
                    <p className="date">Aug 2022 – Oct 2022</p>
                    <p className="project-title">Project title: Spotify skip action prediction using user sequential data and acoustic characteristics.</p>
                    <p className="technologies">Technologies: Google Colaboratory, Python(pandas, numpy, matplotlib, seaborn, sklearn, tensorflow, xgboost, Django), Git, GitHub and Heroku.</p>
                </div>
            </div>
            <div className="skills-section sections">
                <h1 className="sub-section-title">Skills :</h1>
                <p><span>Programming languages :</span> Java, C, Python</p>
                <p><span>DevOps :</span> Git, Docker, Jenkins</p>
                <p><span>Web development :</span> JavaScript, HTML, CSS, Spring boot, Django</p>
                <p><span>Mobile development :</span> Android Studio</p>
                <p><span>Agile methods :</span> Scrum</p>
                <p><span>Database management systems :</span> Oracle, MySQL</p>
                <p><span>Conception :</span> UML, Merise</p>
            </div>
            <div className="languages-section sections">
                <h1 className="sub-section-title">Languages :</h1>
                <p><span>Arabic :</span> Native Language.</p>
                <p><span>English :</span> Good.</p>
                <p><span>Frensh :</span> Fluent.</p>
            </div>
            <div className="certificates-section sections">
                <h1 className="sub-section-title">Certificates :</h1>
                <p>Artificial Intelligence Analyst from IBM</p>
            </div>
            <div className="shapes">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
                <div className="shape shape4"></div>
            </div>
        </div>
        
    )
}

export default About;