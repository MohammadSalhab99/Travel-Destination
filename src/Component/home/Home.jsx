import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import toursData from "../../data/db.json";
import React from "react";
import ReactDOM from "react-dom";
function Home(){
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Tours data={toursData} />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
}
export default Home;