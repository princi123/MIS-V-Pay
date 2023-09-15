import React from 'react';
import Login from './components/Auth/Login';
import Home from './components/Dashboard/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Retail_Transaction from "../src/components/Retail/Retail_Transaction"
import Table from "../src/components/Table/SalesTable"
import Search from "./components/Retail/AUM/Search"
import RetailZhReport from './components/Retail/AUM/RetailZhReport';
import AumReport from './components/Retail/AUM/AumReport';
import RegionWise from './components/Table/All-Wise-Table/RegionWise';
import UfcWise from './components/Table/All-Wise-Table/UfcWise';
import RmWise from './components/Table/All-Wise-Table/RmWise';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Transaction' element={<Retail_Transaction/>}/>
        <Route path='/Table' element={<Table/>}/>
        <Route path='/Aum' element={<Search/>}/>
        <Route path='/RetailZoneReport' element={<RetailZhReport/>}/>
        <Route path='/Aumreport' element={<AumReport/>}/>
        <Route path='/RegionWise' element={<RegionWise/>}/>
        <Route path='/UfcWise' element={<UfcWise/>}/>
        <Route path='/RmWise' element={<RmWise/>}/>
      </Routes>
    </BrowserRouter>         
    </div>
  );
}

export default App;
