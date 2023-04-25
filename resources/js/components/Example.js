import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pocetna from './Pocetna';
function Example() {
    return (
        <BrowserRouter >
           <Navbar></Navbar>

             <Routes>
             <Route path="/" element={ <Pocetna></Pocetna>}></Route>

             </Routes>

           <Footer></Footer>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
