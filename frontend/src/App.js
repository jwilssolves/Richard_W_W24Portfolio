import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav'; 
import Footer from './components/footer'; 
import Home from './pages/home'; 
import AcademicWork from './pages/academicWork'; 
import ProfessionalWork from './pages/professionalWork'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/academic-work" element={<AcademicWork />} />
          <Route path="/professional-work" element={<ProfessionalWork />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
