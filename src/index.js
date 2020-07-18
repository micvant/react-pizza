import React from 'react';
import ReactDOM from 'react-dom';
// Либа для роутинга (Переход между страницами без перезагрузки)
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/app.scss';
import App from './App';
import store from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  // Убрал чтобы не было дублирования Рендера
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root'),
);
