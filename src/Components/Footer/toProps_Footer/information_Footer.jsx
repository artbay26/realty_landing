

const InformationFooter  = (props) => {
    return (
        <ul className="footer__list footer__list_information">
            {
            props.InformationtoProps.map(el => 
                <li className="item" key={el.id}>                     
                    <a href="#" className="link">{el.item}</a>
                </li>)                   
            }
        </ul>
    )
}
export default InformationFooter 