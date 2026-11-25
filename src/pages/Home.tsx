
/* ==================================================
   HOME PAGE

   Includes:
   01 - Navigation
   02 - Hero introduction
   03 - About preview
   04 - Selected work
   05 - Contact section
   06 - Footer
   ================================================== */

// Imports reusable components and project data
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sortedProjects } from "../data/projects";

function Home() {

  // Automatically selects the most recent project
  const featuredProject = sortedProjects[0];

  // Selects the next four most recent projects
  const otherProjects = sortedProjects.slice(1, 5);

  // Identifies portrait and landscape project images
  function getImageClass(projectId: string) {
    return projectId === "photography-series" ||
      projectId === "nos-nua"
      ? "project-image-portrait"
      : "project-image-landscape";
  }

  return (
    <div className="home-page">

      {/* ==========================================
          01 - NAVIGATION
          ========================================== */}

      <Navbar />


      {/* ==========================================
          02 - HERO INTRODUCTION
          ========================================== */}

      <section className="hero">
        <div className="hero-text">

          {/* Introduces my design specialism */}
          <p className="hero-intro">
            PRODUCT & INTERACTION DESIGNER
          </p>

          {/* Displays my name across two lines */}
          <h1>
            <span className="hero-first-name">EVA</span>

            <span className="hero-last-name">
              O'CONNOR<span className="hero-dot">.</span>
            </span>
          </h1>

        </div>
      </section>


      {/* ==========================================
          03 - ABOUT PREVIEW
          ========================================== */}

      <section className="about-preview">

        {/* Highlights part of the heading in pink */}
        <h2>
          Beyond the{" "}
          <span className="about-highlight">portfolio.</span>
        </h2>

        {/* Links to my full About page */}
        <Link to="/about" className="text-link">
          Get to know me →
        </Link>

      </section>


      {/* ==========================================
          04 - SELECTED WORK
          ========================================== */}

      <section className="featured-projects">

        <h2>Selected Work</h2>

        {/* Creates a two-column staggered gallery */}
        <div className="project-grid">


          {/* LEFT COLUMN */}
          <div className="project-column project-column-left">

            {/* Displays my most recent project first */}
            {featuredProject && (
              <article className="project-card featured-card">

                <Link to={`/projects/${featuredProject.id}`}>

                  {/* Displays the cover using the correct image proportions */}
                  <div
                    className={`project-image-placeholder ${getImageClass(
                      featuredProject.id
                    )}`}
                  >
                    {featuredProject.image ? (
                      <img
                        src={featuredProject.image}
                        alt={`${featuredProject.title} project cover`}
                        className="project-cover-image"
                      />
                    ) : (
                      <div className="coming-soon-placeholder">
                        <span>COMING SOON</span>
                      </div>
                    )}
                  </div>

                  {/* Displays the project category and title */}
                  <div className="project-info">
                    <p className="project-type">
                      {featuredProject.type}
                    </p>
                    <h3>{featuredProject.title}</h3>
                  </div>

                </Link>
              </article>
            )}

            {/* Displays alternating projects in the left column */}
            {otherProjects
              .filter((_, index) => index % 2 === 1)
              .map((project) => (
                <article className="project-card" key={project.id}>

                  <Link to={`/projects/${project.id}`}>

                    {/* Displays the project cover or a placeholder */}
                    <div
                      className={`project-image-placeholder ${getImageClass(
                        project.id
                      )}`}
                    >
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

                    {/* Displays the project category and title */}
                    <div className="project-info">
                      <p className="project-type">
                        {project.type}
                      </p>
                      <h3>{project.title}</h3>
                    </div>

                  </Link>
                </article>
              ))}

          </div>


          {/* RIGHT COLUMN */}
          <div className="project-column project-column-right">

            {/* Displays the remaining alternating projects */}
            {otherProjects
              .filter((_, index) => index % 2 === 0)
              .map((project) => (
                <article className="project-card" key={project.id}>

                  <Link to={`/projects/${project.id}`}>

                    {/* Displays the project cover or a placeholder */}
                    <div
                      className={`project-image-placeholder ${getImageClass(
                        project.id
                      )}`}
                    >
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

                    {/* Displays the project category and title */}
                    <div className="project-info">
                      <p className="project-type">
                        {project.type}
                      </p>
                      <h3>{project.title}</h3>
                    </div>

                  </Link>
                </article>
              ))}

          </div>

        </div>
      </section>


      {/* ==========================================
          05 - CONTACT SECTION
          ========================================== */}

      <section className="contact-cta">

        <p className="section-label">Get In Touch</p>

        <h2>Have something in mind?</h2>

        {/* Main contact statement */}
        <h3 className="home-contact-statement">
          Let's talk.
        </h3>

        {/* Opens the visitor's email application */}
        <a
          href="mailto:evaoconnor66@gmail.com"
          className="contact-email"
        >
          evaoconnor66@gmail.com
        </a>

      </section>


      {/* ==========================================
          06 - FOOTER
          ========================================== */}

      <Footer />

    </div>
  );
}

export default Home;
