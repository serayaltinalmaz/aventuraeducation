import React, { useContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Basketpage from './pages/Basketpage';
import Productspage from './pages/Productspage';
import Favproductspage from './pages/Favproductspage';
import Layout from './component/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
        <Route path='products' element={<Productspage />} />
        <Route path='basketpage' element={<Basketpage />} />
        <Route path='favproductspage' element={<Favproductspage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
