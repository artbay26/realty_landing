

const ProjectsListImages = (props) => {
    return (
        <ul className="projects__listImages listImages">
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
export default ProjectsListImages