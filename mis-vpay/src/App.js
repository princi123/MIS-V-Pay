import React from 'react';
import Login from './components/Auth/Login';
import Home from './components/Dashboard/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Retail_Transaction from "../src/components/Retail/Retail_Transaction"
import Table from "../src/components/Table/SalesTable"
import Search from "./components/Retail/AUM/Search"
import RegionWise from './components/Table/All-Wise-Table/RegionWise';
import UfcWise from './components/Table/All-Wise-Table/UfcWise';
import RmWise from './components/Table/All-Wise-Table/RmWise';
import AumRegionReport from './components/Retail/AUM/AumRegionReport';
import AumUfcReport from './components/Retail/AUM/AumUfcReport';
import TransactionMandateReport from './components/Retail/MandateReport/TransactionMandateReport';
import TransactionReport from './components/Retail/Report_Transaction';

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
        <Route path='/RegionWise' element={<RegionWise/>}/>
        <Route path='/UfcWise' element={<UfcWise/>}/>
        <Route path='/RmWise' element={<RmWise/>}/>
        <Route path='/AumRegionReport/:zone/:report_period' element={<AumRegionReport/>}/>
        <Route path="/AumUfcReport/:zone/:report_period/:region_code" element={<AumUfcReport />} />
        <Route path='/MandateReport' element={<TransactionMandateReport/>}/>
        <Route path='TransactionReport' element={<TransactionReport/>}/>
      </Routes>
    </BrowserRouter>         
    </div>
  );
}

export default App;
