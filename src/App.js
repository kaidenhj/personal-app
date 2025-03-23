
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExRoutePage from './pages/exRoutePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/exRoute" element={<ExRoutePage />} exact />
      </Routes>
    </Router>
  );
};

export default App;
 