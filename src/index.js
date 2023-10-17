import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contador from './Components/Contador';
import DibujosComplejos from './Components/DibujosComplejos';
import DibujosComplejosReact from './Components/DibujosComplejosReact';
import HijoDeporte from './Components/HijoDeporte';
import PadreDeportes from './Components/PadreDeportes';
import Suma from './Components/Suma';
import SumaHijo from './Components/SumaHijo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suma />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
