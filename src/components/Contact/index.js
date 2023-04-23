import './index.scss';
import {faGithub,faWhatsapp,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,faCopy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useState,useRef,useEffect } from 'react';


const Contact = () => {
    const [contactInfoValue,setContactInfoValue] = useState('');
    const focusRef=useRef(),githubRef=useRef(),linkedinRef=useRef(),
        emailRef=useRef(),phoneRef=useRef();
    
    useEffect(()=>{
        const githubClicked = () =>{
            focusRef.current.classList.add("github-effect");
            focusRef.current.classList.remove("linkedin-effect");
            focusRef.current.classList.remove("email-effect");
            focusRef.current.classList.remove("phone-effect");
        }
        const linkedinClicked = () =>{
            focusRef.current.classList.remove("github-effect");
            focusRef.current.classList.add("linkedin-effect");
            focusRef.current.classList.remove("email-effect");
            focusRef.current.classList.remove("phone-effect");
        }
        const emailClicked = () =>{
            focusRef.current.classList.remove("github-effect");
            focusRef.current.classList.remove("linkedin-effect");
            focusRef.current.classList.add("email-effect");
            focusRef.current.classList.remove("phone-effect");
        }
        const phoneClicked = () =>{
            focusRef.current.classList.remove("github-effect");
            focusRef.current.classList.remove("linkedin-effect");
            focusRef.current.classList.remove("email-effect");
            focusRef.current.classList.add("phone-effect");
        }

        githubRef.current.addEventListener('mouseup',githubClicked);
        linkedinRef.current.addEventListener('mouseup',linkedinClicked);
        emailRef.current.addEventListener('mouseup',emailClicked);
        phoneRef.current.addEventListener('mouseup',phoneClicked);
    }
    )




    return (
        <div className="contact-page">
            <div className="container">
                <div className='focus' ref={focusRef}></div>
                <FontAwesomeIcon icon={faGithub} color='#CC2936' className='contact-info github' ref={githubRef}
                onClick={()=>{
                    setContactInfoValue('github.com/noro129');
                }}/>
                <FontAwesomeIcon icon={faEnvelope} color='#CC2936' className='contact-info email' ref={emailRef}
                onClick={()=>{
                    setContactInfoValue('errazi111@gmail.com');
                }}/>
                <FontAwesomeIcon icon={faLinkedin} color='#CC2936' className='contact-info linkedin' ref={linkedinRef}
                onClick={()=>{
                    setContactInfoValue('www.linkedin.com/in/oussama-errazi-bb47b8224/');
                }}/>
                <FontAwesomeIcon icon={faWhatsapp} color='#CC2936' className='contact-info phone' ref={phoneRef}
                onClick={()=>{
                    setContactInfoValue('+212694105029');
                }}/>
                <div className="contact">
                    <p className='contact-info-value'>{contactInfoValue}</p>
                    <FontAwesomeIcon icon={faCopy} color='#ffffff3f' className='copy'
                    onClick={()=>{
                        if(contactInfoValue!==''){
                            navigator.clipboard.writeText(contactInfoValue);
                        }
                    }}/>
                </div>
            </div>
            <div className='front-stars'>
                <div style={{bottom:-10,left:50}}></div><div style={{bottom:-10,left:5}}></div>
                <div style={{bottom:-20,left:582}}></div><div style={{bottom:-310,left:582}}></div>
                <div style={{bottom:-100,left:470}}></div><div style={{bottom:-500,left:713}}></div>
                <div style={{bottom:-50,left:230}}></div><div style={{bottom:-100,left:823}}></div>
                <div style={{bottom:-14,left:193}}></div><div style={{bottom:-120,left:287}}></div>
                <div style={{bottom:-100,left:992}}></div><div style={{bottom:-50,left:298}}></div>
                <div style={{bottom:-12,left:629}}></div><div style={{bottom:-10,left:692}}></div>
                <div style={{bottom:-130,left:302}}></div><div style={{bottom:-190,left:350}}></div>
                <div style={{bottom:-150,left:69}}></div><div style={{bottom:-50,left:729}}></div>
                <div style={{bottom:-10,left:50}} className='type1'></div><div style={{bottom:-10,left:5}} className='type1'></div>
                <div style={{bottom:-20,left:582}} className='type1'></div><div style={{bottom:-310,left:582}} className='type1'></div>
                <div style={{bottom:-100,left:470}} className='type1'></div><div style={{bottom:-500,left:713}} className='type1'></div>
                <div style={{bottom:-50,left:230}} className='type1'></div><div style={{bottom:-100,left:823}} className='type1'></div>
                <div style={{bottom:-14,left:193}} className='type1'></div><div style={{bottom:-120,left:287}} className='type1'></div>
                <div style={{bottom:-100,left:992}} className='type1'></div><div style={{bottom:-50,left:298}} className='type1'></div>
                <div style={{bottom:-12,left:629}} className='type1'></div><div style={{bottom:-10,left:692}} className='type1'></div>
                <div style={{bottom:-130,left:302}} className='type1'></div><div style={{bottom:-190,left:350}} className='type1'></div>
                <div style={{bottom:-150,left:69}} className='type1'></div><div style={{bottom:-50,left:729}} className='type1'></div>
                <div style={{bottom:-10,left:50}} className='type2'></div><div style={{bottom:-10,left:5}} className='type2'></div>
                <div style={{bottom:-20,left:582}} className='type2'></div><div style={{bottom:-310,left:582}} className='type2'></div>
                <div style={{bottom:-100,left:470}} className='type2'></div><div style={{bottom:-500,left:713}} className='type2'></div>
                <div style={{bottom:-50,left:230}} className='type2'></div><div style={{bottom:-100,left:823}} className='type2'></div>
                <div style={{bottom:-14,left:193}} className='type2'></div><div style={{bottom:-120,left:287}} className='type2'></div>
                <div style={{bottom:-100,left:992}} className='type2'></div><div style={{bottom:-50,left:298}} className='type2'></div>
                <div style={{bottom:-12,left:629}} className='type2'></div><div style={{bottom:-10,left:692}} className='type2'></div>
                <div style={{bottom:-130,left:302}} className='type2'></div><div style={{bottom:-190,left:350}} className='type2'></div>
                <div style={{bottom:-150,left:69}} className='type2'></div><div style={{bottom:-50,left:729}} className='type2'></div>
                
            </div>
            <div className='middle-stars'>
                <div style={{bottom:-20,left:203}}></div><div style={{bottom:-25,left:130}}></div>
                <div style={{bottom:-100,left:283}}></div><div style={{bottom:-23,left:153}}></div>
                <div style={{bottom:-240,left:892}}></div><div style={{bottom:-927,left:262}}></div>
                <div style={{bottom:-70,left:29}}></div><div style={{bottom:-823,left:928}}></div>
                <div style={{bottom:-190,left:830}}></div><div style={{bottom:-725,left:732}}></div>
                <div style={{bottom:-180,left:13}}></div><div style={{bottom:-732,left:523}}></div>
                <div style={{bottom:-760,left:28}}></div><div style={{bottom:-252,left:297}}></div>
                <div style={{bottom:-380,left:862}}></div><div style={{bottom:-400,left:472}}></div>
                <div style={{bottom:-340,left:732}}></div><div style={{bottom:-102,left:100}}></div>
                <div style={{bottom:-20,left:203}} className='type1'></div><div style={{bottom:-25,left:130}} className='type1'></div>
                <div style={{bottom:-100,left:283}} className='type1'></div><div style={{bottom:-23,left:153}} className='type1'></div>
                <div style={{bottom:-240,left:892}} className='type1'></div><div style={{bottom:-927,left:262}} className='type1'></div>
                <div style={{bottom:-70,left:29}} className='type1'></div><div style={{bottom:-823,left:928}} className='type1'></div>
                <div style={{bottom:-190,left:830}} className='type1'></div><div style={{bottom:-725,left:732}} className='type1'></div>
                <div style={{bottom:-180,left:13}} className='type1'></div><div style={{bottom:-732,left:523}} className='type1'></div>
                <div style={{bottom:-760,left:28}} className='type1'></div><div style={{bottom:-252,left:297}} className='type1'></div>
                <div style={{bottom:-380,left:862}} className='type1'></div><div style={{bottom:-400,left:472}} className='type1'></div>
                <div style={{bottom:-340,left:732}} className='type1'></div><div style={{bottom:-102,left:100}} className='type1'></div>
                <div style={{bottom:-20,left:203}} className='type2'></div><div style={{bottom:-25,left:130}} className='type2'></div>
                <div style={{bottom:-100,left:283}} className='type2'></div><div style={{bottom:-23,left:153}} className='type2'></div>
                <div style={{bottom:-240,left:892}} className='type2'></div><div style={{bottom:-927,left:262}} className='type2'></div>
                <div style={{bottom:-70,left:29}} className='type2'></div><div style={{bottom:-823,left:928}} className='type2'></div>
                <div style={{bottom:-190,left:830}} className='type2'></div><div style={{bottom:-725,left:732}} className='type2'></div>
                <div style={{bottom:-180,left:13}} className='type2'></div><div style={{bottom:-732,left:523}} className='type2'></div>
                <div style={{bottom:-760,left:28}} className='type2'></div><div style={{bottom:-252,left:297}} className='type2'></div>
                <div style={{bottom:-380,left:862}} className='type2'></div><div style={{bottom:-400,left:472}} className='type2'></div>
                <div style={{bottom:-340,left:732}} className='type2'></div><div style={{bottom:-102,left:100}} className='type2'></div>
            </div>
            <div className='far-stars'>
                <div style={{bottom:-569,left:394}}></div><div style={{bottom:-308,left:298}}></div>
                <div style={{bottom:-569,left:918}}></div><div style={{bottom:-283,left:278}}></div>
                <div style={{bottom:-696,left:349}}></div><div style={{bottom:-199,left:198}}></div>
                <div style={{bottom:-97,left:209}}></div><div style={{bottom:-547,left:620}}></div>
                <div style={{bottom:-957,left:198}}></div><div style={{bottom:-200,left:761}}></div>
                <div style={{bottom:-784,left:109}}></div><div style={{bottom:-259,left:298}}></div>
                <div style={{bottom:-845,left:234}}></div><div style={{bottom:-274,left:671}}></div>
                <div style={{bottom:-645,left:439}}></div><div style={{bottom:-229,left:827}}></div>
                <div style={{bottom:-300,left:723}}></div><div style={{bottom:-300,left:398}}></div>
                <div style={{bottom:-569,left:394}} className='type1'></div><div style={{bottom:-308,left:298}} className='type1'></div>
                <div style={{bottom:-569,left:918}} className='type1'></div><div style={{bottom:-283,left:278}} className='type1'></div>
                <div style={{bottom:-696,left:349}} className='type1'></div><div style={{bottom:-199,left:198}} className='type1'></div>
                <div style={{bottom:-97,left:209}} className='type1'></div><div style={{bottom:-547,left:620}} className='type1'></div>
                <div style={{bottom:-957,left:198}} className='type1'></div><div style={{bottom:-200,left:761}} className='type1'></div>
                <div style={{bottom:-784,left:109}} className='type1'></div><div style={{bottom:-259,left:298}} className='type1'></div>
                <div style={{bottom:-845,left:234}} className='type1'></div><div style={{bottom:-274,left:671}} className='type1'></div>
                <div style={{bottom:-645,left:439}} className='type1'></div><div style={{bottom:-229,left:827}} className='type1'></div>
                <div style={{bottom:-300,left:723}} className='type1'></div><div style={{bottom:-300,left:398}} className='type1'></div>
                <div style={{bottom:-569,left:394}} className='type2'></div><div style={{bottom:-308,left:298}} className='type2'></div>
                <div style={{bottom:-569,left:918}} className='type2'></div><div style={{bottom:-283,left:278}} className='type2'></div>
                <div style={{bottom:-696,left:349}} className='type2'></div><div style={{bottom:-199,left:198}} className='type2'></div>
                <div style={{bottom:-97,left:209}} className='type2'></div><div style={{bottom:-547,left:620}} className='type2'></div>
                <div style={{bottom:-957,left:198}} className='type2'></div><div style={{bottom:-200,left:761}} className='type2'></div>
                <div style={{bottom:-784,left:109}} className='type2'></div><div style={{bottom:-259,left:298}} className='type2'></div>
                <div style={{bottom:-845,left:234}} className='type2'></div><div style={{bottom:-274,left:671}} className='type2'></div>
                <div style={{bottom:-645,left:439}} className='type2'></div><div style={{bottom:-229,left:827}} className='type2'></div>
                <div style={{bottom:-300,left:723}} className='type2'></div><div style={{bottom:-300,left:398}} className='type2'></div>
            </div>
        </div>
    )
}

export default Contact;