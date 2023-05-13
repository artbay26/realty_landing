import './Overview.css';
import dataOverview from '../../../data/data_Overview';
import OverviewVideo from './toProps_Overview/video_Overview';
import OverviewDiscription from './toProps_Overview/discription_Overview';

const SectionOverview = (props) => {
    
        return ( 
        <section className="main__overview overview">
            <div className="overview__container  _container">
                <div className="overview__textBox">
                    <h4  className="overview__pretitle">Our expertise</h4>
                    <h1  className="overview__title">"The best apartment in Dubai" we will find your dream</h1>
                    <p className="overview__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>                             
                <OverviewVideo VideotoProps={dataOverview.videoBox.items}/>                     
            </div>
            <div className="overview__expertiseBox">
                <div className="overview__citation">“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” 
                    <span>— Mary Kay Ash</span>
                </div>
                <div className="overview__imgTextBox">
                <OverviewDiscription  discriptiontoProps={dataOverview.discription.items}/> 
                </div>
            </div>   
        </section>)
    }  
    export default SectionOverview
                    
            
            
            
        




    