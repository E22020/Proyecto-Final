import './Principal.css'
import { useState } from 'react'  
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Categorias from './pages/Categorías';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.jsx';
import Marvel from './pages/Marvel.jsx';
import Technic from './pages/Technic.jsx';
import HP from './pages/HP.jsx';
import SW from './pages/SW.jsx';

function Principal(){
    return(
        <div className="Principal">
          <div className='nav'>
            <Navbar/>
          </div>
          <div className='pages'>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/Tienda" element={<Tienda/>} />
              <Route path="/Categorias" element={<Categorias/>} />
              <Route path="/Marvel" element={<Marvel/>} />
              <Route path="/Technic" element={<Technic/>} />
              <Route path="/HP" element={<HP/>} />
              <Route path="/SW" element={<SW/>} />
            </Routes>
          </div>
          <div className='footer'>
            <Footer/>
          </div>
        </div>
    );
}
export default Principal