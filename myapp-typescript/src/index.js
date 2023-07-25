import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Basketprovider from './BasketContext';
import Productsprovider from './ProductsContext';
import EventProvider from './EventContext';
import  DiscountProvider  from './DiscountContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
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


