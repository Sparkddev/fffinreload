import React from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home';
import Personal from './personal';
import Final from './final';
import DashBoardTwo from './dashboard';
import Transactions from './transactions';
import Withdrawals from './withdraw';

function App() {
  return (
      <>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/personal" element={<Personal />}/>
          <Route path="/final-step" element={<Final />}/>

          <Route path="/account/dashboard" element={<DashBoardTwo/>} />


          <Route path="/account/transactions" element={<Transactions/>} />
          <Route path="/account/withdrawals" element={<Withdrawals/>} />

          
            
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
