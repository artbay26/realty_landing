
import dataFAQ from '../../../data/data_FAQ';
import './FAQ.css';
import FAQList from './toProps_FAQ/qa_FAQ'



const SectionFAQ = (props) => {
        return ( 
            <section className="main__FAQ FAQ">
                <div className="FAQ__container FAQ__containerBox _container">                              
                    <h1 className="FAQ__titile">FAQ</h1>
                    <ul className="qa__list ">
                        <FAQList ListAQtoProp = {dataFAQ.listAQ.items}/>
                    </ul>
                </div>
            </section>
        )
    }
    export default SectionFAQ