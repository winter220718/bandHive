import React from 'react';
import './components/main/style.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import CommonHeader from "./components/common/header/CommonHeader";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <>
        <App />
        </>
    </React.StrictMode>
);



