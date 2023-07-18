import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SupportFakeDataProvider from './Context/SupportFakeDataContext';
import { PrimeReactProvider } from 'primereact/api';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider>
    <SupportFakeDataProvider>
      <App />
    </SupportFakeDataProvider>
  </PrimeReactProvider>
);


