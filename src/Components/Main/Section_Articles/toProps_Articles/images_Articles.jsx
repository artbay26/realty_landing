

const ArticlesListImages = (props) => {
    return (
        <ul className="projects__listImages listImages listImages__item_artical">
            {
            props.ListImagestoProps.map(el => 
                <li className="listImages__item" key={el.id}>                     
                        <a href="#" className="listImages__link" >
                        <img
                            src={el.img}
                            alt={el.name}                            
                        /> 
                         {el.title} 
                         </a>          
                </li>)                   
            }
        </ul>
    )
}
export default ArticlesListImages