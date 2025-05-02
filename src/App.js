import './App.css';
import {useEffect} from "react";
import Header from "./Components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import Form from "./Components/Form/Form";


function App() {
    const {tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [tg])


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
        </div>
    );
}
//
export default App;
