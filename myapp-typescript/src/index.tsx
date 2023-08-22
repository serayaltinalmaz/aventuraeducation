import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Basketprovider from './Context/BasketContext';
import Productsprovider from './Context/ProductsContext';
import EventProvider from './Context/EventContext';
import  DiscountProvider  from './Context/DiscountContext';
const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div'));
root.render(
  <BrowserRouter>
    <Productsprovider>
      <EventProvider>
        <Basketprovider>
          <DiscountProvider>
            <App />
          </DiscountProvider>
        </Basketprovider>
      </EventProvider>
    </Productsprovider>
  </BrowserRouter>
);


