import Home from "./Component/home/Home";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer';
import ToursDetails from './Component/ToursDetails/ToursDetails'
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tour/:id" element={<ToursDetails/>} />
      </Routes>
<Footer/>
      
    </>
  );
}

export default App;
