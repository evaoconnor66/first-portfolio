import { Link } from "react-router";
import Navbar from "../components/Navbar"; // imports my reusable navbar
import Footer from "../components/Footer"; // imports my reusable footer

function Home() { // creates the component that will be my home page
  return (
    <div className="home-page">
      {/* everything inside here is what React puts on the screen */}

{/* puts my reusable navbar on the home page */}
<Navbar />

    {/*main intro people see when they first open my website */}
    <section className="hero">
        <div className="hero-text">
            <p className="hero-intro">Hi, I'm Eva</p>
           
            <h1> Product & Interaction Designer</h1>
            
            <p className="hero-description">
                I design thoughtful products and experiences through
                creativity and hands on making
            </p>
            </div>
    </section>
    {/* shows a selection of my main projects on the home page */}
    <section className="featured-projects">
        <h2>Selected Work</h2>
        <div className="project-grid">

{/* space for future Master's project */}

<article className="project-card project-placeholder">
  
  {/* placeholder where a project image can be added later */}
<div className="project-image-placeholder">
  Image Placeholder
</div>

  <div className="project-info">
    <p className="project-type">Interaction & Experience Design</p>
    <h3>Master's Project</h3>
    <p className="project-status">Coming Soon</p>
  </div>
</article>

{/* space for another future Master's project */}
<article className="project-card project-placeholder">
  {/* placeholder where a project image can be added later */}
<div className="project-image-placeholder">
  Image Placeholder
</div>

  <div className="project-info">
    <p className="project-type">Interaction & Experience Design</p>
    <h3>Master's Project</h3>
    <p className="project-status">Coming Soon</p>
  </div>
</article>
</div>
        </section>

        {/* short intro about me - full information will be on my About page */}
<section className="about-preview">
  <p className="section-label">About Me</p>

  <h2>
    Product designer with a hands-on approach to research, making and
    user-focused design.
  </h2>

  <Link to="/about" className="text-link">
    More About Me
  </Link>
</section>

{/* encourages users to get in touch and links to my Contact page */}
<section className="contact-cta">
  <p className="section-label">Get In Touch</p>

  <h2>Have a project or opportunity in mind?</h2>

  <Link to="/contact" className="contact-button">
    Contact Me
  </Link>
</section>

{/* puts my reusable footer at the bottom of the home page */}
<Footer />
    </div>
  );
}

export default Home;