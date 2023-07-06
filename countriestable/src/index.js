import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CountriesProvider from './Context/CountriesContext';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import CompaniesProvider from './Context/CompaniesContext';
import ProductsProvider from './Context/ProductsContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CountriesProvider>
      <ProductsProvider>
        <CompaniesProvider>
          <App/>
        </CompaniesProvider>
      </ProductsProvider>
    </CountriesProvider> 
  </BrowserRouter>
);

