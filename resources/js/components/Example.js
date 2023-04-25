import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pocetna from './Pocetna';
import Login from './Login';
import Register from './Register';
import Kontakt from './Kontakt';
function Example() {
    return (
        <BrowserRouter >
           <Navbar></Navbar>

             <Routes>
             <Route path="/" element={ <Pocetna></Pocetna>}></Route>
             <Route path="/login" element={ <Login></Login>}></Route>
             <Route path="/register" element={ <Register></Register>}></Route>
             <Route path="/kontakt" element={ <Kontakt></Kontakt>}></Route>

             </Routes>

           <Footer></Footer>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
