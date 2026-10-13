import reactLogo from './assets/Headshot.png';
import horse from './assets/horse.png'
import './App.css';
import { Routes, Route, Link } from "react-router";
import About from './pages/About';

function Home() {
  return (
    <>
    <header className="header">
  <nav className="navbar">
    <div className="logo-container">
      <img
        src={reactLogo}
        alt="Eva O'Connor Headshot"
        className="logo react-logo"
      ></img>
    </div>

    <ul className="nav-links">
      <li><Link to="/about">About</Link></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
      <main className="container">
  <section id="hero" className="hero">
    <h1>Eva O'Connor</h1>
    <p>
      Product designer | interaction designer
    </p>
   <Link to="/about" className="hero-button">About Me</Link>
  </section>
 {/* About Section */}
<section id="about" className="section about">
  <h2>About Me</h2>
  <p>
    I am a Product Design & Technology graduate currently studying a
    Master's in Interaction & Experience Design at the University of
    Limerick. I am interested in creating thoughtful, user-focused
    products and experiences through research, design and prototyping.
  </p>

  <Link to="/about" className="text-link">More About Me</Link>
</section>
 
  {/* Project Section */}
<section id="projects" className="section projects">
  <h2>Featured Projects</h2>

  <div className="project-grid">
    {/* Project 1 card */}
    <div className="project-card">
      <img
      src={horse}
      alt="Equia - Equine Back Health"
      className="project-image"
    />
<h3>Equia - Equine Back Health</h3>
      <p>
  Equia is an equine back health system designed to support young horse
  comfort and injury prevention through monitoring, recovery and
  accessible everyday care.
</p>
    </div>

    {/* Project 2 card */}
    <div className="project-card">
      <h3>Nós-Nua - Design & Marketing</h3>
      <p>
  During my co-op placement with Nós-Nua, I worked across product design,
  packaging, branding, photography, e-commerce and social media to support
  the development and launch of the brand and its products.
</p>
    </div>
  </div>
</section>
{/* Contact section */}
<section id="contact" className="section contact">
  {/* Contact section */}
  <h2>Contact Me</h2>

  <p>
    Email:{' '}
    <a href="mailto:evaoconnor66@gmail.com">
      evaoconnor66@gmail.com
    </a>
  </p>

  <p>
    LinkedIn:{' '}
    <a
      href="https://www.linkedin.com/in/evaoconnor66/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Eva O'Connor
    </a>
  </p>
  {/* LinkedIn link */}
</section>
</main>
<footer className="footer">
  {/* Footer section */}
  <p>
    &copy; {new Date().getFullYear()} Eva O'Connor. All Rights Reserved.
  </p>
  {/* Dynamic copyright year */}
</footer>
    </>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;