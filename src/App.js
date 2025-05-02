import './App.css';
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import Form from "./Components/Form/Form";


function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'/'} element={<Form />}/>
            </Routes>
        </div>
    );
}
//
export default App;
