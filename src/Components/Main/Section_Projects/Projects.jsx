import { useState } from "react";
import './Projects.css';
import ProjectsListMenu from './toProps_Projects/listMenu_projects';
import ProjectsListImages from './toProps_Projects/images_Projects';


const SectionProjects = (props) => {
    const [showAll, setActive] = useState(false);
    const toggleShowAll = () => {
        setActive(!showAll)
    };    

    return ( 
        <section className="main__projects projects">
            <div className="projects__container projects__containerBox _container">
                <div className="projects__titleBox">
                    <h1  className="projects__title">Latest projects</h1>
                    <nav className="projects__list">
                        <ProjectsListMenu listMenutoProps = {props.projectsSet.listMenu.items}/>
                    </nav>
                    <div className="projects__link" onClick={toggleShowAll}>{showAll ? 'Collapse' : 'View'} all projects</div>                 
                 </div>
                <div className="projects__imagesBox">
                <ProjectsListImages ListImagestoProps = {showAll ? props.projectsSet.listImages.items: props.projectsSet.listImages.items.slice(0, 4)}/>
                </div>          
            </div>
        </section>)
    }
    export default SectionProjects;