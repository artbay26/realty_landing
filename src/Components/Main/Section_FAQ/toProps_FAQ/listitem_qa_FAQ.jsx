import { useState } from "react"


const FAQListItem = (props) => {
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive)
    };
    
    return (                   
        <li className="qa__item"  key={props.faqItem.id}>                     
            <div className="qa__box" onClick={ToggleClass}>
                <div className="qa__question">
                    {props.faqItem.question}
                </div>
                <div className="qa__plus">+</div>
            </div>
            <div className={"qa__answer " + (isActive ? "active" : "hidden")}>
                {props.faqItem.answer}
            </div>                            
        </li>
    )
}
export default FAQListItem