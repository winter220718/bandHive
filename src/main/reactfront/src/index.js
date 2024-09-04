import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/common/Common.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <>
            <link href="https://fonts.googleapis.com" rel="preconnect"/>

            <App/>
        </>
    </React.StrictMode>
);



