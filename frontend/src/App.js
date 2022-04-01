import Homepage from './pages/Homepage';
import PreviewCard from './pages/PreviewCard';
import Account from './pages/Account';
import AboutUs from './pages/AboutUs';
import CreateCardPage from './pages/CreateCardPage';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "./App.css";
//import { Route } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Header from './components/static_components/Header';
import Navbar from './components/static_components/Navbar';
import Footer from './components/static_components/Footer';

function App() {
  /*
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("/api/cards")
      .then(res => setCard(res.data))
      .catch(error => console.log(error))
  });
*/
  return (
    <div className="App">
      <Router>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/create_card">Create Business Card</Link>
      </li>
      <li>
        <Link to="/preview_card">Preview Business Card</Link>
      </li>
      <li>
        <Link to="/account">Account</Link>
      </li>
      <li>
        <Link to="/about_us">About Us</Link>
      </li>
      <li>
        <Link to="/contact_us">Contact Us </Link>
      </li>
      
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/create_card" element={<CreateCardPage />}></Route>
        <Route path="/preview_card" element={<PreviewCard />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/about_us" element={<AboutUs />}></Route>
        <Route path="/contact_us" element={<ContactUs />}></Route>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
