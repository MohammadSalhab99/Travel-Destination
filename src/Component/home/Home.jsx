import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import toursData from "../../data/db.json";
import {Routes, Route} from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
function Home(){
  return(
 <>

    <Tours  props={toursData}/>

  
    </>

);
}
export default Home;
