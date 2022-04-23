import './App.css';
import Header from './components/header/Header';
import React from 'react';
import Info from './pages/info/Info';
import Ad from './pages/ad/Ad';
import Login from './pages/login/Login';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main';
// import { Login } from './pages/login/Login';
import { Contacts } from './pages/contacts/Contacts';
// import { Ad } from './pages/ad/Ad';
// import {Info} from './pages/info/Info'

import Footer from './components/footer/Footer';
import About_Us from './components/about_us/About_us';

class App extends React.Component {
  render() {
    const houses = []

    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/info/:id" element={<Info />} />
            <Route path="/ad" element={<Ad />} />
            <Route path="*" element={<h1 className='text-center mt-5'>404</h1>} />


          </Routes>
          
        </div>
      </BrowserRouter >
      
    );
  }
}


export default App;
