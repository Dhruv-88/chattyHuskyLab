
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import OurTeam from './components/OurTeam.js';
import AboutUs from './components/AboutUs.js';
import Projects from './components/Projects.js';


const App = () => {
  
  return (
    <Router  >
      <Routes>
        <Route path="/chattyHuskyLab" element={<Home />} exact />
        <Route path="/chattyHuskyLab/ourteam" element={<OurTeam/>} />
        <Route path="/chattyHuskyLab/aboutus" element={<AboutUs />} />
        <Route path="/chattyHuskyLab/projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
