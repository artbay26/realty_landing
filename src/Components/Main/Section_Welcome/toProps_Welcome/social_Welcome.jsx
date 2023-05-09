
const WelcomeSocial = (props) => {
    return (
        <ul className="welcome__social social">
            {
            props.listSocialtoProps.map(el => <li className="social__item">{el.faIcon}</li> ) 
            }
        </ul>
    )
}
export default WelcomeSocial