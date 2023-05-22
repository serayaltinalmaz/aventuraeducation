import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Basketprovider, { BasketContext } from './BasketContext';
import Productsprovider, { ProductsContext } from './ProductsContext';
import EventProvider from './EventContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Productsprovider>
      <EventProvider>
        <Basketprovider>
          <App/>
        </Basketprovider>
      </EventProvider>
    </Productsprovider>
  </BrowserRouter>
);


