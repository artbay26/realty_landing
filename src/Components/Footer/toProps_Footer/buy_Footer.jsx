

const BuyFooter = (props) => {
    return (
        <ul className="footer__list footer__list_buy">
            {
            props.BuytoProps.map(el => 
                <li className="item" key={el.id}>                     
                    <a href="#" className="link">{el.item}</a>
                </li>)                   
            }
        </ul>
    )
}
export default BuyFooter