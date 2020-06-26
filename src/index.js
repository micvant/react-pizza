import React from 'react';
import ReactDOM from 'react-dom';
// Либа для роутинга (Переход между страницами без перезагрузки)
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/app.scss';

import App from './App';

ReactDOM.render(
  // Убрал чтобы не было дублирования Рендера
  // <React.StrictMode>
  <Router>
    <App />
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root'),
);
