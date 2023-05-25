import React, { useContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Basketpage from './pages/Basketpage';
import Productspage from './pages/Productspage';
import Favproductspage from './pages/Favproductspage';
import Layout from './component/Layout';
import Productdetail from './component/Productdetail';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/' element={<Layout/>}>
          <Route path='products' element={<Productspage />} />
          <Route path='productdetail/:id' element={<Productdetail />} />
          <Route path='basketpage' element={<Basketpage />} />
          <Route path='favproductspage' element={<Favproductspage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
