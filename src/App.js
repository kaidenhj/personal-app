
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExRoute from './pages/exRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/exRoute" element={<ExRoute />} exact />
      </Routes>
    </Router>
  );
};

export default App;
 