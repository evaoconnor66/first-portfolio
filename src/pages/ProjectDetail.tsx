
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";



function ProjectDetail() {
  // Gets the project ID from the website URL
  const { id } = useParams();

// Finds the project that matches the ID in the URL
const project = projects.find((project) => project.id === id);


  // Shows a message if the project cannot be found
  if (!project) {
    return <p>Project not found.</p>;
  }

  return (

    <div className="project-detail-page">
{/* puts my reusable navbar on the project page */}
<Navbar />

<main className="project-detail-content">
{/* introduces the individual project */}

{/* Introduces the selected portfolio project */}
<section className="project-detail-intro">

  {/* Displays the completion year and project type */}
  <p className="project-details">
    {project.date.slice(0, 4)} | {project.type}
  </p>

  {/* Displays the project title */}
  <h1>{project.title}</h1>

  {/* Displays the project introduction */}
  <p>{project.description}</p>

</section>


{/* Displays the selected project's main image */}
<div className="project-detail-image">
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.title} final design`}
      className="project-cover-image"
    />
  ) : (
    "Image Placeholder"
  )}
</div>

{/* Displays the Equia case study only on the Equia page */}
{project.id === "equia" && (
 <>

{/* gives a short overview of the project */}
<section className="project-overview">
  <h2>Project Overview</h2>

  <p>
  Equia is a connected equine back monitoring and recovery system designed to help riders identify early signs of discomfort and support preventative care. Developed as my final-year Product Design & Technology project, the system combines a handheld scanning device, therapeutic recovery rug and connected mobile application. The project involved user-centred research, concept development, CAD modelling, physical prototyping and iterative testing to create a practical solution for everyday equestrian environments.
  </p>
</section>
{/* shows the main stages of my design process */}
<section className="project-process">
  <h2>Design Process</h2>


{/* First stage of the Equia design process */}
<div className="process-stage">
  <h3>01 — Research & Problem Identification</h3>
<p>
  The project began by investigating equine back discomfort
  and the challenges riders face in recognising early signs
  of pain. Research explored the impact of saddle pressure,
  muscular tension and repetitive strain, helping identify
  opportunities for earlier assessment and preventative care.
</p>
  <img
    src="/images/equia/equia-research.png"
    alt="Equia research into equine back discomfort"
    className="process-image"
  />
  <img
  src="/images/equia/equia-insights.png"
  alt="Five key research insights informing the Equia design"
  className="process-image"
/>
</div>
<div className="process-stage">
  <h3>02 — Concept Development</h3>
  <p>
    Initial concepts explored different approaches to monitoring
    equine back health and supporting recovery. Sketching and
    design development helped refine the system into a practical
    combination of physical products and a connected digital experience.
  </p>
  <img
  src="/images/equia/equia-concepts.png"
  alt="Early Equia concept sketches exploring three design directions"
  className="process-image"
/>
</div>
<div className="process-stage">
  <h3>03 — CAD & Physical Prototyping</h3>
  <p>
    The selected concepts were developed through CAD modelling,
    material exploration and physical prototyping. This stage
    focused on refining the products' form, construction and
    practical usability.
  </p>
  <img
  src="/images/equia/equia-ergonomics.png"
  alt="Four clay prototypes exploring handheld grip ergonomics, thumb positioning and form refinement"
  className="process-image"
/>
<img
  src="/images/equia/equia-rug-prototyping.png"
  alt="Recovery rug development showing pattern making, closure refinement, heating placement and physical prototyping"
  className="process-image"
/>
<img
  src="/images/equia/equia-electronics.png"
  alt="Arduino electronics prototyping, including LED feedback, temperature sensing, pressure sensing and circuit development"
  className="process-image"
/>
</div>
<div className="process-stage">
  <h3>04 — Testing & Evaluation</h3>
  <p>
  Ergonomic testing was conducted with 10 participants using
  full-scale physical prototypes. Participants evaluated grip
  comfort, stability and ease of use across different design
  iterations.
</p>

<p>
  The testing informed refinements to the handheld scanner,
  including reduced bulk, improved grip contours and a rounded
  underside to support smoother rolling interaction.
</p>

<img
  src="/images/equia/equia-testing.png"
  alt="Ergonomic evaluation of refined handheld scanner prototypes"
  className="process-image"
/>
</div>
<div className="process-stage">
  <h3>05 — CAD Development</h3>
  <p>
    CAD modelling was used to develop and refine the Equia
    handheld scanner, exploring its overall form, component
    arrangement and physical construction. The models helped
    communicate the design and develop it towards the final
    product.
  </p>
</div>
</section>

{/* shows the final result of the project */}
<section className="project-outcome">
  <h2>Final Outcome</h2>

  <p>
    A short description of the final design and project outcome.
  </p>
</section>
  </>
)}
</main>

{/* puts my reusable footer at the bottom of the project page */}
<Footer />
    </div>
  );
}

export default ProjectDetail;