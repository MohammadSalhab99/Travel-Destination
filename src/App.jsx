import Home from "./Component/home/Home";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer';
function App() {
  return (
    <>
    
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/city/:id" element={<ToursDetails/>} /> */}
      </Routes>
      
    </>
  );
}

export default App;
