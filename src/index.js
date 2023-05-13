import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DigitalClock from './components/DigitalClock';
import Countdown from './components/CountDown/CountDown';
import Stopwatch from './components/Cronometro/Cronometro';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <DigitalClock/>
    <Countdown/>
    <Stopwatch/>
  </React.StrictMode>
);


