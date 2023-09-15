import React from 'react';
import Login from './components/Auth/Login';
import Home from './components/Dashboard/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Retail_Transaction from "../src/components/Retail/Retail_Transaction"
import Table from "../src/components/Table/SalesTable"
import Search from "./components/Retail/AUM/Search"
import AumRegionReport from './components/Retail/AUM/AumRegionReport';
import AumUfcReport from './components/Retail/AUM/AumUfcReport';
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
        <Route path='/AumRegionReport/:zone/:report_period' element={<AumRegionReport/>}/>
        <Route path="/AumUfcReport/:zone/:report_period/:region_code" element={<AumUfcReport />} />

      </Routes>
    </BrowserRouter>         
    </div>
  );
}

export default App;
