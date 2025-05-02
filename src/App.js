import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTelegram } from './hooks/useTelegram';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import Form from './Components/Form/Form';
import './App.css';

function App() {
    const { tg } = useTelegram(); // Деструктуризация корректно

    useEffect(() => {
        if (tg) {
            tg.ready(); // Инициализация WebApp
            tg.expand(); // Раскрыть на весь экран
        }
    }, [tg]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path="form" element={<Form />} />
            </Routes>
        </div>
    );
}

export default App;