import React, { useContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Basketpage from './pages/Basketpage';
import Productspage from './pages/Productspage';
import Favproductspage from './pages/Favproductspage';
import Layout from './component/Layout';
import Productdetail from './component/Productdetail';
import Login from './pages/Login';
import Registerpage from './pages/Registerpage';
import Privacy from './pages/Privacy';
import Discount from './component/Discount';
import Home from './HomePage/Home';
function App() {
  return (
    <div style={{ minWidth: window.innerWidth, minHeight: window.innerHeight }}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Registerpage />} />
        <Route path='register/privacy' element={<Privacy />} />
        <Route path='/' element={<Layout />}>
          <Route path='homepage' element={<Home/>} />
          <Route path='products' element={<Productspage />} />
          <Route path='manage' element={<Discount />} />
          <Route path='productdetail/:id' element={<Productdetail />} />
          <Route path='basketpage' element={<Basketpage />} />
          <Route path='favproductspage' element={<Favproductspage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
