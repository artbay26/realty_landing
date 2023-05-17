import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        Aos.init({duration:  2000});
    }, []);    

      return ( 
        <div className = "App">
            <div className="wrapper">
                <Header/>
                <Main/>              
                <Footer/>
           </div>               
        </div>
    );
}


export default App;