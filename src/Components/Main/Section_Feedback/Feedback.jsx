
import dataFeedback from '../../../data/data_Feedback';
import './Feedback.css';

import FeedbackListPersons from './toProps_Feedback/persons_Feedback';


const SectionFeedback = (props) => {
        return ( 
            <section className="main__feedback feedback">
                <div className="feedback__container feedback__containerBox _container">                              
                    <FeedbackListPersons ListPersonstoProps = {dataFeedback.listPersons.items}/>
                </div>
            </section>
        )
    }
    export default SectionFeedback;