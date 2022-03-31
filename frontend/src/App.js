import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreateCard from './pages/CreateCard';
import PreviewCard from './pages/PreviewCard';
import Account from './pages/Account';

function App() {
  return (
    <div>
    <Router>
      <div className="App">
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
      
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/create_card" element={<CreateCard />}></Route>
        <Route exact path="/preview_card" element={<PreviewCard />}></Route>
        <Route exact path="/account" element={<Account />}></Route>
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
