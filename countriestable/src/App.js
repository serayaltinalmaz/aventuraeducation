
import './App.css';
import CountriesComponent from './Components/CountriesComponent';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import CompaniesComponent from './Components/CompaniesComponent';
import ProductsComponent from './Components/ProductsComponent';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/countries' element={<CountriesComponent/>} />
          <Route path='/companies' element={<CompaniesComponent/>}/>
          <Route path='/products' element={<ProductsComponent/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
