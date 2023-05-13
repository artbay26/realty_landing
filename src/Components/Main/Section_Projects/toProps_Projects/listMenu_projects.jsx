const ProjectsListMenu = (props) => {
    return (
        <ul className="projects__listMenu listMenu">
            {
                props.listMenutoProps.map(el => 
                    <li className="listMenu__item" key={el.id}> 
                        <a href="#" className="listMenu__link" >{el.name}</a>                        
                    </li>
                )                   
            }
        </ul>
    )
}
export default ProjectsListMenu