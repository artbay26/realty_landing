

const WelcomeImages = (props) => {
    return (
        <ul className="welcom__images images _ibg">
            {
                props.listImagestoProps.map(el => 
                    <li className={"images__item " + (el.id === props.currentImageId ? "active" : "hidden")} key={el.id}>
                        <img
                            src={el.img}
                            alt={el.name}
                        />
                    </li> 
                )
            }
        </ul>
        )
    }

export default WelcomeImages