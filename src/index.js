import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.ready(); // Сообщаем Telegram, что WebApp готов
    window.Telegram.WebApp.expand(); // Раскрываем на весь экран
}
root.render(

    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

