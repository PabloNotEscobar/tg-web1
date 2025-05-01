import './App.css';
import {useEffect} from "react";
import Header from "./Components/Header/Header";

function App() {

    useEffect(() => {
        tg.ready()
    }, [])


    return (
        <div className="App">
            work
            <Header/>
        </div>
    );
}

export default App;
