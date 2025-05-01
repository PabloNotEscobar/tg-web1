import './App.css';
import {useEffect} from "react";
import Header from "./Components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [])


    return (
        <div className="App">
            <button onClick={onToggleButton}>toggle</button>
            <Header/>
        </div>
    );
}

export default App;
