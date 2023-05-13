
import dataArticles from '../../../data/data_Articles';
import './Articles.css';

import ArticlesListImages from './toProps_Articles/images_Articles';


const SectionProjects = (props) => {
    
        return ( 
        <section className="main__articles articles">
            <div className="articles__container articles__containerBox _container">
                <div className="articles__titleBox">
                    <h1  className="articles__title">Useful articles</h1>
                    <a href='#' className="articles__link ">View all articles</a>                       
                </div>
                <div className="projects__imagesBox">
                <ArticlesListImages ListImagestoProps = {dataArticles.listImages.items}/>
                </div>      
            </div>
        </section>)
}

export default SectionProjects;  



     
            
            
       