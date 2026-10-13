
import './App.css';
import { Routes, Route } from "react-router";
import About from './pages/About';
import Home from './pages/Home'; // imports my new home page
import Projects from './pages/Projects'; // imports my projects page
import Contact from './pages/Contact'; // imports my contact page
import ProjectDetail from './pages/ProjectDetail'; // imports my project detail page

 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    
    </Routes>
  );
}
export default App;