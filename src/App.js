import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInSide from './view/login/login';
import MenuAppBar from './components/navbar';
import HomePage from './view/homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInSide />} />
        <Route path='login' element={<SignInSide />} />

        <Route path='/user' element={<MenuAppBar/>}>
          <Route path='home' element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
