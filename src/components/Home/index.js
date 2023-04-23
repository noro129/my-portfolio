import './index.scss';
import Shape from '../../assets/images/shape.png';
import {Link} from 'react-router-dom';
import AnimatedLetters from '../animatedLetters';


const Home = () => {
    const helloArray = ['H','e','l','l','o',',',' ']
    const jobArray = ['T','h','a','t',"'",'s',' ','m','y',' ','P','o','r','t','f','o','l','i','o']

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass="text-animate"
                        strArray={helloArray}
                        idx={1}/>
                    <br/>
                    <AnimatedLetters letterClass="text-animate"
                        strArray={jobArray}
                        idx={8}/>
                    <img src={Shape} alt="bars" className='bars'/>
                
                </h1>
                <h2>Software Engineer Student</h2>
                <Link to="/my-portfolio/contact" className='flat-button'>CONTACT</Link>
            </div>
        </div>
    );
}

export default Home;