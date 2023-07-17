import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SupportFakeDataProvider from './Context/SupportFakeDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SupportFakeDataProvider>
    <App />
  </SupportFakeDataProvider>
);


