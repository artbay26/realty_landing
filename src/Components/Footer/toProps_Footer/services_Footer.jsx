

const ServicesFooter = (props) => {
    return (
        <ul className="footer__list footer__list_services">
            {
            props.ServicestoProps.map(el => 
                <li className="item" key={el.id}>                     
                    <a href="#" className="link">{el.item}</a>
                </li>)                   
            }
        </ul>
    )
}
export default ServicesFooter