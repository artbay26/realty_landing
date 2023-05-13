import "./Main.css";
import SectionWelcome from "./Section_Welcome/Welcome";
import SectionProjects from "./Section_Projects/Projects";
import SectionOverview from "./Section_Overview/Overview";
import SectionContacts from "./Section_Contacts/Contacts";
import SectionArticles from "./Section_Articles/Articles";
import SectionFeedback from "./Section_Feedback/Feedback";
import SectionFAQ from "./Section_FAQ/FAQ";



const Main = () => {
    return (
        <main>
            <SectionWelcome/>
            <SectionProjects/>
            <SectionOverview/>
            <SectionContacts/>
            <SectionArticles/>
            <SectionFeedback/>
            <SectionFAQ/>
        </main>
    )
}

export default Main;