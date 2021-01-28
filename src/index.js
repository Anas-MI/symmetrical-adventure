import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
reportWebVitals();
