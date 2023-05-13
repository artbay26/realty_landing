
import dataProjects from '../../../data/data_Projects';
import './Projects.css';
import ProjectsListMenu from './toProps_Projects/listMenu_projects';
import ProjectsListImages from './toProps_Projects/images_Projects';


const SectionProjects = (props) => {
    
        return ( 
        <section className="main__projects projects">
            <div className="projects__container projects__containerBox _container">
                <div className="projects__titleBox">
                    <h1  className="projects__title">Latest projects</h1>
                    <nav className="projects__list">
                        <ProjectsListMenu listMenutoProps = {dataProjects.listMenu.items}/>
                    </nav>
                    <a href='#' className="projects__link ">View all articles</a>
                </div>
                <div className="projects__imagesBox">
                <ProjectsListImages ListImagestoProps = {dataProjects.listImages.items}/>
                </div>          
            </div>
        </section>)
    }
    export default SectionProjects;