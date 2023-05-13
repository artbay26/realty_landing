import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
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