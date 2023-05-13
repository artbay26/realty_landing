import './Header.css';
import logo from '../../assets/Logo.svg';



const Header = () => {
    return ( 
        <header className="header">
            <div className="header__container _container">
                <a href="#" className="header__logo"><img src={logo}/></a>
                <nav className="header__menu menu">
                    <div className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#" className="menu__link">Buy</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Blog</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link ">About</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="header__actions actions">
                    <div className="actions__body">
                        <ul className="actions_listActions">                            
                            <li><a href="#" className="actions__button button">Book a consultation</a></li>                                             
                            <li className="actions__list">
                                <div className="actions__item">EN</div>
                                <div className="actions__item">UA</div>                              
                            </li>
                            <li className="actions__phone">+38(044) 123-45-67 </li>
                        </ul>
                    </div>                                        
                </div>
                <button className="buttons__icon icon-menu" type="button"><span></span></button>                
            </div>
        </header>   
    );
}

export default Header;