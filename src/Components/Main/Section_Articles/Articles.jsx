import { useState } from "react";
import dataArticles from '../../../data/data_Articles';
import './Articles.css';
import ArticlesListImages from './toProps_Articles/images_Articles';


const SectionProjects = () => {
    const [showAll, setActive] = useState(false);
    const toggleShowAll = () => {
        setActive(!showAll)
    };    

        return ( 
        <section className="main__articles articles">
            <div className="articles__container articles__containerBox _container">
                <div className="articles__titleBox">
                    <h1  className="articles__title">Useful articles</h1>
                    <div className="articles__link" onClick={toggleShowAll}> {showAll ? 'Collapse' : 'View'} all articles</div>                       
                </div>                
                <ArticlesListImages ListImagestoProps = {showAll ? dataArticles.listImages.items: dataArticles.listImages.items.slice(0, 3)}/>
            </div>
            
        </section>)
}

export default SectionProjects;  



     
            
            
       