import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Form from "./Components/Form/Form";


function App() {
    const {tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [tg])


    return (
        <div className="App">
            <Form />
        </div>
    );
}
//
export default App;
