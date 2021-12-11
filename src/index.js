import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App.js"
import AuthContextProvider from './Context/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
    </BrowserRouter>,
    document.getElementById('root')    
);
