// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import P5Background from "./components/P5Background";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <P5Background />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route
            path="/journalism"
            element={<CategoryPage category="Journalism" />}
          />
          <Route
            path="/research"
            element={<CategoryPage category="Research" />}
          />
          <Route
            path="/social-design"
            element={<CategoryPage category="Social Design" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
