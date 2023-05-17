import './Contacts.css';

const SectionContacts = () => {
    
    return ( 
    <section className="main__contacts contacts">
        <div className="contacts__container contacts__containerBox  _container">
            <h4  className="contacts__pretitle">Do you have any questions?</h4>
            <h1  className="contacts__title">"Contact us</h1>
             <form className="contacts__form form">
                <div className="form__inputs">
                    <input type="text" className="form__inputsEnt" value="Enter your mail" />
                    <input type="button" className="form__inputsBtn"value="send" />
                </div>
            </form>                       
        </div>
    </section>)
}  
export default SectionContacts