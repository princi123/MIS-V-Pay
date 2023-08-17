import React from 'react';
import Login from './components/Auth/Login';
import Home from './components/Dashboard/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Retail_Treansation from "../src/components/Retail/Retail_Treansation"
import Table from "../src/components/Table/SalesTable"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Transcation' element={<Retail_Treansation/>}/>
        <Route path='/Table' element={<Table/>}/>
      </Routes>
    </BrowserRouter>  
      
        
    </div>
  );
}

export default App;
