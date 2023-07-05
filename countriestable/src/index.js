import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CountriesProvider from './Context/CountriesContext';
import 'semantic-ui-css/semantic.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountriesProvider>
      <App/>
    </CountriesProvider>
  </React.StrictMode>
);

