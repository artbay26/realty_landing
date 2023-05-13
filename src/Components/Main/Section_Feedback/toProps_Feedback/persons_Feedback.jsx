

const FeedbackListPersons = (props) => {
    return (
        <ul className="feedback__persons persons">
            {
            props.ListPersonstoProps.map(el => 
                <li className="listImages__item listImages__item_persons" key={el.id}>                     
                    <div className="persons__img">
                        <img
                            src={el.img}
                            alt={el.name}                            
                        /> 
                    </div>
                    <div className="persons__firstName">
                        {el.firstName}
                    </div>
                    <div className="persons__job">
                        {el.job} 
                        <span>
                            <a href="#" className="persons__jobLink">
                                {el.jobLink}
                            </a>
                        </span>
                    </div>
                    <div className="persons__text">
                        {el.text}
                    </div>              
                </li>)                   
            }
        </ul>
    )
}
export default FeedbackListPersons