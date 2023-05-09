import './Welcome.css';
import dataWelcome from '../../../data/data_Welcome';
import WelcomeSocial from './toProps_Welcome/social_Welcome';
import WelcomeImages from './toProps_Welcome/images_Welcome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretSquareRight} from '@fortawesome/free-regular-svg-icons';





const SectionWelcome = (props) => {
    return ( 
        <section className="main__welcome welcome">
            <div className="welcome__container _container">
                <WelcomeSocial listSocialtoProps = {dataWelcome.listSocial.items}/>
                <div className="welcom__titleBox">
                    <h3 className="welcom__preTitle">Lorem ipsum</h3>
                    <h1 className="welcom__title">Welcome home <span>to</span> luxury</h1>
                    <a href="#" className="welcom__consultation">Book a consultation  <span><FontAwesomeIcon icon={faCaretSquareRight} /></span> </a>
                </div>
                <ul className="welcome__numbers numbers">
                    <li className="numbers_item">
                        <h2 className="numbers__digit">01</h2>
                        <p className="numbers__text">Lorem Ipsum  Dolorem apset</p>
                    </li>
                    <li className="numbers_item">
                        <h2 className="numbers__digit">02</h2>
                        <p className="numbers__text">Lorem Ipsum  Dolorem apset</p>
                    </li>
                    <li className="numbers_item">
                        <h2 className="numbers__digit">03</h2>
                        <p className="numbers__text">Lorem Ipsum  Dolorem apset</p>
                    </li>
                </ul>
                <WelcomeImages listImagestoProps = {dataWelcome.listImagesDubai.items}/>
            </div>            
        </section>)
    }

    export default SectionWelcome;