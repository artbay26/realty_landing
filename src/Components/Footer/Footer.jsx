import './Footer.css';
import logo from '../../assets/Logo.svg';
import dataFooter from '../../data/data_Footer'
import BuyFooter from './toProps_Footer/buy_Footer';
import ServicesFooter from './toProps_Footer/services_Footer';
import InformationFooter from './toProps_Footer/information_Footer';
import AboutFooter from './toProps_Footer/about_Footer';




const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="foter__container _container">
                <a href="#" className="footer__logo"><img src={logo}/></a>
                <div className="footer__listsBox">
                    <div className="footer__titleListBox">
                        <h3>Buy</h3>
                        <BuyFooter  BuytoProps={dataFooter.buy.items}/>
                    </div> 
                    <div className="footer__titleListBox">
                        <h3>Services</h3>
                        <ServicesFooter  ServicestoProps={dataFooter.services.items}/>
                    </div>
                    <div className="footer__titleListBox">
                        <h3>Information</h3>
                        <InformationFooter  InformationtoProps={dataFooter.informatiion.items}/>
                    </div>
                    <div className="footer__titleListBox">
                        <h3>About</h3>
                        <AboutFooter  AbouttoProps={dataFooter.about.items}/>
                    </div> 
                </div>               
            </div>
        </footer>   
    );
}

export default Footer;