import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import CreateCardPage from './pages/CreateCardPage';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Navbar from './components/static_components/Navbar';
import Footer from './components/static_components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Template1Page from './pages/Template1Page';
import Template2Page from './pages/Template2Page';
import Template3Page from './pages/Template3Page';
import Template4Page from './pages/Template4Page';
function App() {
  return (
    <div>
    <Router>
      < Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/create_card" element={<CreateCardPage />}></Route>
          <Route exact path="/template1" element={<Template1Page />}></Route>
          <Route exact path="/template2" element={<Template2Page />}></Route>
          <Route exact path="/template3" element={<Template3Page />}></Route>
          <Route exact path="/template4" element={<Template4Page />}></Route>
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