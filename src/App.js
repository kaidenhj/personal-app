
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <NavBar />
    </Router>
  );
};

export default App;
