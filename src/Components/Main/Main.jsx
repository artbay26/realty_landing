import "./Main.css";
import SectionWelcome from "./Section_Welcome/Welcome";
import SectionProjects from "./Section_Projects/Projects";
import SectionOverview from "./Section_Overview/Overview";
import SectionContacts from "./Section_Contacts/Contacts";
import SectionArticles from "./Section_Articles/Articles";
import SectionFeedback from "./Section_Feedback/Feedback";
import SectionFAQ from "./Section_FAQ/FAQ";
import {Routes, Route} from "react-router-dom";
import dataProjects from '../../data/data_Projects'; 
import dataOverview from '../../data/data_Overview';
import dataWelcome from '../../data/data_Welcome';




const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<SectionWelcome startSet={dataWelcome}/>}/>
                <Route path="/blog" element={<SectionProjects projectsSet={dataProjects}/>}/>
                <Route path="/about" element={<SectionOverview overviewSet={dataOverview}/>}/>
                <Route path="/contact" element={<SectionContacts/>}/>
            </Routes>                           
            <SectionArticles/>
            <SectionFeedback/>
            <SectionFAQ/>
        </main>
    )
}

export default Main;