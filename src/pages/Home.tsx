import { Link } from "react-router";
import Navbar from "../components/Navbar"; // imports my reusable navbar
import Footer from "../components/Footer"; // imports my reusable footer
import { sortedProjects } from "../data/projects"; // Gets my portfolio projects from the central project data file


function Home() { // creates the component that will be my home page
/* OLD CODE — manually selecting a featured project
const featuredProject = sortedProjects.find(
  (project) => project.featured === true
);
*/

// NEW CODE — automatically selects the newest project
const featuredProject = sortedProjects[0];

/* OLD CODE — selected four projects by excluding the featured project
const otherProjects = sortedProjects
  .filter((project) => project.id !== featuredProject?.id)
  .slice(0, 4);
*/

// NEW CODE — displays projects 2 to 5, in completion-date order
// Project 1 is already displayed in the large first card
// When a newer project is added, the oldest drops off the homepage
const otherProjects = sortedProjects.slice(1, 5);

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
            
            </div>
    </section>
  
  {/* short intro about me - full information will be on my About page */}
<section className="about-preview">
  
<h2>
  Beyond the{" "}
  <span className="about-highlight">portfolio.</span>
</h2>


  <Link to="/about" className="text-link">
    Get to know me →
  </Link>
</section>

  
    {/* shows a selection of my main projects on the home page */}
    <section className="featured-projects">
        <h2>Selected Work</h2>
        <div className="project-grid">

  {/* Left column of the editorial project gallery */}
<div className="project-column project-column-left">


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

{/* Selects every second project for the left column */}
{otherProjects.filter((_, index) => index % 2 === 1).map((project) => (
    <article className="project-card" key={project.id}>

    {/* Links each card to its full project page */}
    <Link to={`/projects/${project.id}`}>

      {/* Displays the project's cover image */}

<div className="project-image-placeholder">
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.title} project cover`}
      className="project-cover-image"
    />
  ) : (
    <div className="coming-soon-placeholder">
      <span>COMING SOON</span>
    </div>
  )}
</div>


      {/* Displays the project category and name */}
      <div className="project-info">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
      </div>

    </Link>
  </article>
))}

{/* Closes the left column of the project gallery */}
</div>

{/* Right column of the editorial project gallery */}
<div className="project-column project-column-right">

 {/* Creates a smaller card for every non-featured project */}
{otherProjects.filter((_, index) => index % 2 === 0).map((project) => (
  <article className="project-card" key={project.id}>

    {/* Links each card to its full project page */}
    <Link to={`/projects/${project.id}`}>

{/* Displays a placeholder for future projects without images */}
<div className="project-image-placeholder">
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.title} project cover`}
      className="project-cover-image"
    />
  ) : (
    <div className="coming-soon-placeholder">
      COMING SOON
    </div>
  )}
</div>

      {/* Displays the project category and name */}
      <div className="project-info">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
      </div>

    </Link>
  </article>
))}

{/* Closes the right column */}
</div>

{/* Closes the overall project grid */}
</div>

{/* Closes the Selected Work section */}
</section>


{/* Large contact section at the bottom of my homepage */}
<section className="contact-cta">

  {/* Small section label */}
  <p className="section-label">Get In Touch</p>

  {/* Main contact heading */}
  <h2>Have something in mind?</h2>

  {/* Large editorial statement */}
  <h3 className="contact-statement">Let's talk.</h3>

  {/* Clickable email address */}
  <a
    href="mailto:evaoconnor66@gmail.com"
    className="contact-email"
  >
    evaoconnor66@gmail.com
    
  </a>

</section>


{/* puts my reusable footer at the bottom of the home page */}
<Footer />
    </div>
  );
}

export default Home;