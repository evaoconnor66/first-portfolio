import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sortedProjects } from "../data/projects";





function Projects() {
  return (
    <div className="projects-page">
 {/* puts my reusable navbar on the projects page */}
<Navbar />

{/* introduces the projects page */}
<main className="projects-content">
  <section className="projects-intro">
    <p className="section-label">My Work</p>
    <h1>Projects</h1>
    <p>
      A selection of projects from product design, interaction design
      and creative work.
    </p>
  </section>

  {/* holds all of the projects shown in my portfolio */}
<section className="projects-list">


{/* Creates a card for each project, newest first */}
{sortedProjects.map((project) => (
  <article className="project-item" key={project.id}>

{/* Clicking the image opens the project page */}
<Link to={`/projects/${project.id}`}>
  <div className="project-image-placeholder">
    {project.image ? (
      <img
        src={project.image}
        alt={`${project.title} project cover`}
        className="project-cover-image"
      />
    ) : (
      "Image Placeholder"
    )}
  </div>
</Link>


    {/* Displays the project title */}
    <h2>{project.title}</h2>

    {/* Displays the completion year and project type */}
    <p className="project-details">
      {project.date.slice(0, 4)} | {project.type}
    </p>

    {/* Displays the project description */}
    <p>{project.description}</p>

    {/* Link to the full project page */}
    <Link
      to={`/projects/${project.id}`}
      className="project-link"
    >
      View Project
    </Link>

  </article>
))}

</section>

{/* Displays smaller creative projects in a visual gallery */}
<section className="other-work">

  <h2>Other Creative Work</h2>

  <p>
    A collection of additional projects exploring product design,
    materials, prototyping and visual communication.
  </p>

  {/* Gallery images and project captions will go here */}
  <div className="other-work-grid">

  </div>

</section>

</main>

{/* puts my reusable footer at the bottom of the projects page */}
<Footer />
    </div>
  );
}

export default Projects;