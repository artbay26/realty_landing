import Project_1 from '../assets/Project_1.jpg';
import Project_2 from '../assets/Project_2.jpg';
import Project_3 from '../assets/Project_3.jpg';
import Project_4 from '../assets/Project_4.jpg';



let dataProjects = {
    listMenu: {
        items: [
            {id: 1, name: 'All'},
            {id: 2, name: 'Building'},
            {id: 3, name: 'Interior'},
           
            
        ]
    },

    listImages: {
        items: [
            {id: 101, img: Project_1, name: 'Villas', title: <h4 className="listImages__title">Villas</h4>},
            {id: 102, img: Project_2, name: 'Villas', title: <h4 className="listImages__title">Villas</h4>},
            {id: 103, img: Project_3, name: 'Houses', title: <h4 className="listImages__title">Houses</h4>},
            {id: 104, img: Project_4, name: 'Villas', title: <h4 className="listImages__title">Villas</h4>},                       
        ]
    },
}



export default dataProjects
