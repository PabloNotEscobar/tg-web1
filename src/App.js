import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready()
    }, [])


    const closeHandler = () => {
        tg.close()
    }


    return (
        <div className="App">
            work
            <button onClose={closeHandler}>Закрыть</button>
        </div>
    );
}

export default App;
