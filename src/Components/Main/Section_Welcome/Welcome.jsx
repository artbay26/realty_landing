import React, {useState} from 'react';


import './Welcome.css';
import dataWelcome from '../../../data/data_Welcome';
import WelcomeSocial from './toProps_Welcome/social_Welcome';
import WelcomeImages from './toProps_Welcome/images_Welcome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretSquareRight} from '@fortawesome/free-regular-svg-icons';
 



const SectionWelcome = (props) => {
    let [currentImageId, setCurrentImageId] = useState(1);
        return ( 
        <section className="main__welcome welcome">
            <div className="welcome__container welcome__containerBox _container">
                <div className="welcome__topBox">
                    <WelcomeSocial listSocialtoProps = {props.startSet.listSocial.items}/>
                    <div className="welcome__titleBox">
                        <h3 className="welcom__preTitle">Lorem ipsum</h3>
                        <h1 className="welcom__title">Welcome home <span>to</span> luxury</h1>
                        <a href="#" className="welcom__consultation">Book a consultation
                            <span>
                                <FontAwesomeIcon icon={faCaretSquareRight}/>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="welcome__bottomBox">
                    <div className="welcome__prevNext">
                        <span className="prev" onClick={()=>{setCurrentImageId(currentImageId === 1 ? 3 : currentImageId-1)}}>prev</span>|
                        <span className="next" onClick={()=>{setCurrentImageId(currentImageId === 3 ? 1 : currentImageId+1)}}>next</span>                      
                    </div>
                    <ul className="welcome__numbers numbers">
                        <li className="numbers__item">
                            <p className="numbers__digit numbers__digit_yellow">01</p>
                            <h2 className="numbers__text">Lorem Ipsum  Dolorem apset</h2>
                        </li>
                        <li className="numbers__item">
                            <p className="numbers__digit">02</p>
                            <h2 className="numbers__text">Lorem Ipsum  Dolorem apset</h2>
                        </li>
                        <li className="numbers__item">
                            <p className="numbers__digit">03</p>
                            <h2 className="numbers__text">Lorem Ipsum  Dolorem apset</h2>
                        </li>
                    </ul>
                </div>                
            </div>
            <WelcomeImages listImagestoProps = {props.startSet.listImagesDubai.items} currentImageId = {currentImageId}/>            
        </section>)
    }




    export default SectionWelcome;