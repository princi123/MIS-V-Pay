import React from 'react';
import Login from './components/Auth/Login';
import Home from './components/Dashboard/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Table from "../src/components/Table/SalesTable"
import Retail_Transaction from './components/Retail/Retail_Transaction';
import DailySchedule from './components/Retail/DailySchedule';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Transaction' element={<Retail_Transaction/>}/>
        <Route path='/Table' element={<Table/>}/>
        <Route path='/DailySchedule' element={<DailySchedule/>}/>
      </Routes>
    </BrowserRouter>  
      
        
    </div>
  );
}

export default App;
