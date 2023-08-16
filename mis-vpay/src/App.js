import React from 'react';
import Login from './Components/Auth/Login';
import Home from './Components/Dashboard/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>  
      
        
    </div>
  );
}

export default App;
