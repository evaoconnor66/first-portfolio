import { Link } from "react-router";
import Navbar from "../components/Navbar"; // imports my reusable navbar
import Footer from "../components/Footer"; // imports my reusable footer
import { sortedProjects } from "../data/projects"; // Gets my portfolio projects from the central project data file


function Home() { // creates the component that will be my home page
  // Finds the project marked as featured in projects.ts
  const featuredProject = sortedProjects.find(
    (project) => project.featured === true
  );

  // Gets the remaining projects for the smaller cards
const otherProjects = sortedProjects.filter(
  (project) => project.featured !== true
);

  return (
    <div className="home-page">
      {/* everything inside here is what React puts on the screen */}

{/* puts my reusable navbar on the home page */}
<Navbar />

    {/*main intro people see when they first open my website */}
    <section className="hero">
        <div className="hero-text">
            <p className="hero-intro">PRODUCT & INTERACTION DESIGNER</p>
           
    <h1>
    <span className="hero-first-name">EVA</span>
    <span className="hero-last-name">
    O'CONNOR<span className="hero-dot">.</span>
    </span>
     </h1>
            
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


{/* Displays the project marked as featured */}
{featuredProject && (
  <article className="project-card featured-card">

    {/* Links to the full project case study */}
    <Link to={`/projects/${featuredProject.id}`}>

      {/* Displays the project's cover image */}
      <div className="project-image-placeholder">
        <img
          src={featuredProject.image}
          alt={`${featuredProject.title} project cover`}
          className="project-cover-image"
        />
      </div>

      {/* Displays the project title and category */}
      <div className="project-info">
        <p className="project-type">{featuredProject.type}</p>
        <h3>{featuredProject.title}</h3>
      </div>

    </Link>
  </article>
)}


 {/* Creates a smaller card for every non-featured project */}
{otherProjects.map((project) => (
  <article className="project-card" key={project.id}>

    {/* Links each card to its full project page */}
    <Link to={`/projects/${project.id}`}>

      {/* Displays the project's cover image */}
      <div className="project-image-placeholder">
        <img
          src={project.image}
          alt={`${project.title} project cover`}
          className="project-cover-image"
        />
      </div>

      {/* Displays the project category and name */}
      <div className="project-info">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
      </div>

    </Link>
  </article>
))}

</div>
        </section>

        {/* short intro about me - full information will be on my About page */}
<section className="about-preview">
  <p className="section-label">About Me</p>

<h2>
  I'm a product and interaction designer who loves turning ideas
  into thoughtful, tangible experiences.
</h2>

  <Link to="/about" className="text-link">
    More About Me →
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