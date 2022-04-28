import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalendarApp } from './CalendarApp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

console.log(process.env);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarApp />);
