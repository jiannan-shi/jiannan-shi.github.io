import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import P5Background from './components/P5Background';
import Home from './pages/Home';
import Journalism from './pages/Journalism';
import Research from './pages/Research';
import SocialDesign from './pages/SocialDesign';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <P5Background />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journalism" element={<Journalism />} />
          <Route path="/research" element={<Research />} />
          <Route path="/social-design" element={<SocialDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
