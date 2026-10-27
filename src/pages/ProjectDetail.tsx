
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
  <img
  src="/images/equia/equia-exploded-cad.png"
  alt="Exploded CAD assembly of the Equia handheld scanner showing its components and construction"
  className="process-image"
/>
</div>
<div className="process-stage">
  <h3>06 — Design for Manufacture</h3>
  <p>
    The handheld scanner was developed with manufacturing and
    assembly in mind. Design considerations included injection
    moulding, material selection, component fit and assembly
    sequencing, alongside opportunities for disassembly and repair.
  </p>
  <div className="manufacturing-image-grid">
  <img
    src="/images/equia/equia-manufacturing-top.png"
    alt="CAD showing battery compartment and internal screw mounting"
  />

  <img
    src="/images/equia/equia-manufacturing-bottom.png"
    alt="CAD showing PCB mounting points and shell construction"
  />
</div>
<div className="process-stage">
  <h3>07 — Manufacturing & Assembly</h3>
  <p>
    Manufacturing development explored the assembly of the
    handheld scanner alongside the construction of the recovery
    rug. This included mechanical assembly planning, textile
    pattern development, fastening methods and the integration
    of functional components.
  </p>
</div>
<h4>Handheld Scanner — Assembly Sequence</h4>

<div className="assembly-sequence">
  <img
    src="/images/equia/equia-assembly-01-04.png"
    alt="Roller assembly steps 1 to 4"
  />
  <img
    src="/images/equia/equia-assembly-05-08.png"
    alt="Roller assembly steps 5 to 8"
  />
  <img
    src="/images/equia/equia-assembly-09-12.png"
    alt="Roller assembly steps 9 to 12"
  />
  <img
    src="/images/equia/equia-assembly-13-17.png"
    alt="Roller assembly steps 13 to 17"
  />
</div>
<h4>Disassembly & Repair</h4>

<p>
  The handheld scanner was designed for non-destructive
  disassembly using standard screw fasteners rather than
  permanent adhesives. This allows access to internal
  components for maintenance, replacement and repair,
  supporting a longer product lifespan.
</p>

<img
  src="/images/equia/equia-disassembly.png"
  alt="Four-step Equia handheld scanner disassembly sequence showing access to internal components"
  className="process-image"
/>
<h4>Recovery Rug — Construction Overview</h4>

<p>
  The recovery rug was developed to combine practical textile
  construction with integrated heating and cooling components.
  Its design considers durability, comfort, ease of fastening
  and access to internal components for maintenance.
</p>

<img
  src="/images/equia/equia-rug-construction.png"
  alt="Equia recovery rug construction showing seven design features and integrated heating and PCM cooling zones"
  className="process-image"
/>

<h4>Key Construction Features</h4>

<p>
  <strong>01 - Outer Shell:</strong> Durable, water-resistant
  fabric protects the internal components while maintaining
  flexibility and comfort.
</p>

<p>
  <strong>02 - Hidden Zipper Access:</strong> A concealed zipper
  provides access to the internal layers for maintenance,
  repair and component replacement.
</p>

<p>
  <strong>03 - Teal Edge Finishing:</strong> Reinforced binding
  improves edge durability, helps prevent fraying and
  provides a distinctive visual detail.
</p>

<p>
  <strong>04 - Belly Strap & Buckle System:</strong> An adjustable
  fastening system helps secure the rug across different
  horse sizes while allowing movement.
</p>

<p>
  <strong>05 - Main Body Panel:</strong> The shaped textile panel
  follows the horse's back and houses the internal
  recovery components.
</p>

<p>
  <strong>06 - Chest Strap Closure:</strong> An adjustable front
  closure helps maintain a secure, comfortable fit while
  allowing quick fastening and removal.
</p>

<p>
  <strong>07 - Control Module Pocket:</strong> A dedicated pocket
  near the withers provides accessible storage for the
  detachable control module.
</p>
<h4>Recovery Rug — Sewing & Assembly Process</h4>

<p>
  The recovery rug was developed through a ten-step textile
  construction process, integrating the outer shell, internal
  lining, heating pockets, PCM cooling inserts, sensors and
  detachable control module.
</p>

<div className="rug-sewing-sequence">
  <img
    src="/images/equia/equia-rug-sewing-01-04.png"
    alt="Recovery rug sewing steps 1 to 4"
  />

  <img
    src="/images/equia/equia-rug-sewing-05-07.png"
    alt="Recovery rug sewing steps 5 to 7"
  />

  <img
    src="/images/equia/equia-rug-sewing-08-10.png"
    alt="Recovery rug sewing steps 8 to 10"
  />
</div>
<div className="prototype-section">
  <h3>Final Handheld Scanner Prototype</h3>

  <p>
    The scanner components were 3D printed, sanded and
    spray-painted to achieve the final surface finish.
    TPU grip sections were produced separately to improve
    comfort and handling. The assembled prototype allowed
    me to evaluate the product's form, scale and ergonomics.
  </p>

  <div className="prototype-gallery">
    <img
      src="/images/equia/roller-prototype-finishing.png"
      alt="Finishing the 3D printed scanner prototype"
    />
    <img
      src="/images/equia/roller-prototype-handheld.png"
      alt="Handheld scanner prototype"
    />
    <img
  src="/images/equia/roller-prototype-final.png"
  alt="Final assembled scanner prototype"
  className="prototype-hero-image"
/>
  </div>
</div>
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