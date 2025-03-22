
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Thing from './pages/thing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/thing" element={<Thing />} exact />
      </Routes>
    </Router>
  );
};

export default App;
 