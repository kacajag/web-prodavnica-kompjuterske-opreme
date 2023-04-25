import React, { useEffect, useState } from 'react';
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
import axios from "axios";
import Ponuda from './Ponuda';


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
function Example() {
    const[token,setToken] = useState();

    const [products,setProducts] = useState([ ]);



    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axiosInstance.get( "http://127.0.0.1:8000/api/products",
              {
                // headers: 
                // {
                //     'Authorization': `Bearer ${window.sessionStorage.getItem("auth_token")}`
                // }
              }
            );
            setProducts(res.data.data);
            console.log(res.data.data)
          } catch (err) {
            console.log(err);
          }
        };
        getProducts();
      }, [ axiosInstance]);









    return (
        <BrowserRouter >
           <Navbar token={token}></Navbar>

             <Routes>
             <Route path="/" element={ <Pocetna></Pocetna>}></Route>
             <Route path="/login" element={ <Login addToken={setToken}></Login>}></Route>
            

             <Route path="/register" element={ <Register></Register>}></Route>
             <Route path="/kontakt" element={ <Kontakt></Kontakt>}></Route>
             <Route path="/ponuda" element={ <Ponuda products={products}></Ponuda>}></Route>

             </Routes>

           <Footer></Footer>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
