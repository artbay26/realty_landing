

const AboutFooter = (props) => {
    return (
        <ul className="footer__list footer__list_about">
            {
            props.AbouttoProps.map(el => 
                <li className="item" key={el.id}>                     
                    <a href="#" className="link">{el.item}</a>
                </li>)                   
            }
        </ul>
    )
}
export default AboutFooter