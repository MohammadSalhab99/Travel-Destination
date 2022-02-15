import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import {Routes, Route} from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
function Home(){
  return(
 <>
  <Header/>
    <Tours />
    <Footer/>
  
    </>

);
}
export default Home;