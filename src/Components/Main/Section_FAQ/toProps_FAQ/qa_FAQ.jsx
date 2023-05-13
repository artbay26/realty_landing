import FAQListItem from "./listitem_qa_FAQ";



const FAQList = (props) => {
    return (
        props.ListAQtoProp.map(el => 
            <FAQListItem faqItem={el}/>
        )
    )
}
export default FAQList