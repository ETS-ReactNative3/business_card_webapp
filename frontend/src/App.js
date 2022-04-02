import Homepage from './pages/Homepage';
import PreviewCardsPage from './pages/PreviewCardsPage';
import AboutUs from './pages/AboutUs';
import CreateCardPage from './pages/CreateCardPage';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import React, {useState, useEffect} from "react";
import Navbar from './components/static_components/Navbar';
import Footer from './components/static_components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
    <div>
    <Router>
      < Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/create_card" element={<CreateCardPage />}></Route>
          <Route exact path="/preview_card" element={<PreviewCardsPage />}></Route>
          <Route exact path="/about_us" element={<AboutUs />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/register" element={<RegisterPage />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>
        </Routes>
    </Router>
    <Footer/>
    </div>
  );
}
export default App;
