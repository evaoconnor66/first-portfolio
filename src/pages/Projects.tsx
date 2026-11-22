import { Link } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sortedProjects } from "../data/projects";



function Projects() {

  // Remembers which project category the visitor selects
  const [activeFilter, setActiveFilter] = useState("All Projects");

  return (

    <div className="projects-page">
 {/* puts my reusable navbar on the projects page */}
<Navbar />

{/* introduces the projects page */}
<main className="projects-content">
  <section className="projects-intro">
    <p className="section-label">My Work</p>
  <h1>
    What I've Been <span>Up To.</span>
  </h1>
</section>

{/* Lets visitors filter projects by design category */}
<div className="project-filters">

  {[
    "All Projects",
    "Product Design",
    "UX/UI & Interactive",
    "Visual & Creative"
  ].map((category) => (

    <button
      key={category}
      type="button"
      className={
        activeFilter === category
          ? "filter-button active"
          : "filter-button"
      }
      onClick={() => setActiveFilter(category)}
    >
      {category}
    </button>

  ))}

</div>
  
{/* holds all of the projects shown in my portfolio */}
<section className="projects-list">

{/* Creates a card for each project, newest first */}
{sortedProjects
  .filter((project) =>
    activeFilter === "All Projects" ||
    project.categories.includes(activeFilter)
  )
  .map((project) => (
  <article className="project-item" key={project.id}>

{/* Clicking the image opens the project page */}
<Link to={`/projects/${project.id}`}>
  <div
  className={`project-image-placeholder ${
    project.id === "photography-series" ||
    project.id === "nos-nua"
      ? "project-image-portrait"
      : "project-image-landscape"
  }`}
>
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

{/* Full description stays visible on desktop */}
<p className="project-description-desktop">
  {project.description}
</p>

{/* Expandable description for mobile */}
<details className="project-description-mobile">
  <summary>Read more</summary>
  <p>{project.description}</p>
</details>

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
</main>

{/* puts my reusable footer at the bottom of the projects page */}
<Footer />
    </div>
  );
}

export default Projects;