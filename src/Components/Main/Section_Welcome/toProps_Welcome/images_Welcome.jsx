const WelcomeImages = (props) => {
    return (
        <ul className="welcom__images images _ibg">
            {
                props.listImagestoProps.map(el => <li className="images__item">{el.imgDubai}</li> )
            }
        </ul>
        )
    }

export default WelcomeImages