import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Art from './components/Art';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/art/:id" element={<Art />} />
      </Routes>
    </Router>
  );
}

export default App;

