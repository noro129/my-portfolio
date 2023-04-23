import './index.scss'
import AnimatedLetters from '../animatedLetters';

const Projects = () => {
    return (
        <div className="projects-page">
            <div className="title">
                <h1>
                <AnimatedLetters letterClass={`text-animate`}
                        strArray={['P','r','o','j','e','c','t','s',' ',':']} idx={1}/>
                </h1>
            </div>
            <div className="projects-section">
                <div className="project-info">
                    <div className="project-title">Design and implementation of a management application for a research establishment</div>
                    <div className="project-tools"><span>Tools used for the project :</span><br/> Merise, Oracle SQL, Apex</div>
                </div>
                <div className="project-info">
                    <div className="project-title">Cloud computing project: design and implementation of a 3-tier deployment architecture</div>
                    <div className="project-tools"><span>Tools used for the project :</span><br/> AWS Cloud</div>
                </div>
                <div className="project-info">
                    <div className="project-title">Mobile application for managing ENSIAS club events</div>
                    <div className="project-tools"><span>Tools used for the project :</span><br/> Android Studio, Java, Firebase</div>
                </div>
                <div className="project-info">
                    <div className="project-title">AI based forecasting system</div>
                    <div className="project-tools"><span>Tools used for the project :</span><br/> Python, time series</div>
                </div>
                <div className="project-info">
                    <div className="project-title">Development of a comparison and simulation of software of connected systems of mobile video surveillance camera integrating event management (creation of alerts, sending notifications )</div>
                    <div className="project-tools"><span>Tools used for the project :</span><br/> Python, Flask, Kiras, Scikit-learn</div>
                </div>
            </div>
        </div>
    )
}

export default Projects;