import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
    return ( 
        <div className = "App">
            <div class="wrapper">
                <Header/>
                <Main/>
           </div>               
        </div>
    );
}

export default App;