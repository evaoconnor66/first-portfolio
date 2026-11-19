import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function About() {
    return(
<div className="about-page">
{/* puts my reusable navbar on the about page */}
<Navbar />

<main className="about-content">

<section className="about-intro">
<div className="about-intro-text">

<h1>Hi, I'm <span>Eva.</span></h1>

 <p className="about-description">
 
  I'm a Product Design & Technology graduate currently pursuing
  an MSc in Interaction & Experience Design at the University
  of Limerick.
</p>

 <p className="about-description">
 I enjoy working across physical and digital design, combining
  research, technical development and hands-on making to bring
  ideas to life.
</p>
  
</div>

<img
  src="/images/about/eva-portrait.jpeg"
  alt="Eva outdoors"
  className="about-portrait"
/>        
        </section>

{/* My skills and software section */}
<section className="about-skills">
    
  <h2>What I Bring to the Table</h2>


{/* Expandable Product Design skills */}
<details className="skill-accordion">
  <summary className="skill-accordion-heading">
    <i className="bi bi-rulers skill-icon" aria-hidden="true"></i>
    <span>Product Design & Engineering</span>
    <i className="bi bi-chevron-down skill-chevron" aria-hidden="true"></i>
  </summary>


{/* Product Design skills list */}
<ul className="skill-accordion-list">
  <li>CAD & 3D Modelling</li>
  <li>Engineering Principles</li>
  <li>Materials & Manufacturing</li>
  <li>Design Sketching</li>
  <li>Design for Manufacture</li>
  <li>Product Development</li>
  <li>Concept Development</li>
  <li>Physical Prototyping</li>
  <li>Sewing & Textiles</li>
</ul>

</details>

{/* Expandable Research and Strategy skills */}
<details className="skill-accordion">
  <summary className="skill-accordion-heading">
    <i className="bi bi-search skill-icon" aria-hidden="true"></i>
    <span>Research & Strategy</span>
    <i className="bi bi-chevron-down skill-chevron" aria-hidden="true"></i>
  </summary>

  <ul className="skill-accordion-list">
    <li>User Research</li>
    <li>Interviews & Surveys</li>
    <li>User Observation</li>
    <li>Ideation & Concept Development</li>
    <li>Usability Testing</li>
    <li>Journey Mapping</li>
    <li>Research Analysis</li>
    <li>Iteration & Evaluation</li>
  </ul>
</details>

{/* Expandable Digital and Interaction Design skills */}
<details className="skill-accordion">
  <summary className="skill-accordion-heading">
    <i className="bi bi-cursor skill-icon" aria-hidden="true"></i>
    <span>Digital & Interaction Design</span>
    <i className="bi bi-chevron-down skill-chevron" aria-hidden="true"></i>
  </summary>

  <ul className="skill-accordion-list">
    <li>UX/UI Design</li>
    <li>Interaction Design</li>
    <li>Wireframing</li>
    <li>Interactive Prototyping</li>
    <li>Creative Coding</li>
    <li>Physical Computing</li>
    <li>Front-End Development</li>
    <li>Human-Computer Interaction</li>
  </ul>
</details>

{/* Expandable Making and Prototyping skills */}
<details className="skill-accordion">
  <summary className="skill-accordion-heading">
    <i className="bi bi-tools skill-icon" aria-hidden="true"></i>
    <span>Making & Prototyping</span>
    <i className="bi bi-chevron-down skill-chevron" aria-hidden="true"></i>
  </summary>

  <ul className="skill-accordion-list">
    <li>Sewing & Textiles</li>
    <li>Physical Prototyping</li>
    <li>3D Printing</li>
    <li>Model Making</li>
    <li>Material Experimentation</li>
    <li>Foam & Cardboard Prototyping</li>
    <li>Surface Finishing</li>
    <li>Testing & Refinement</li>
  </ul>
</details>

{/* Expandable Visual Communication skills */}
<details className="skill-accordion">
  <summary className="skill-accordion-heading">
    <i className="bi bi-camera skill-icon" aria-hidden="true"></i>
    <span>Visual Communication</span>
    <i className="bi bi-chevron-down skill-chevron" aria-hidden="true"></i>
  </summary>

  <ul className="skill-accordion-list">
    <li>Product Photography</li>
    <li>Graphic Design</li>
    <li>Packaging & Branding</li>
    <li>3D Rendering & Visualisation</li>
    <li>Layout & Publication Design</li>
    <li>Visual Storytelling</li>
    <li>Presentation Design</li>
    <li>Digital Content Creation</li>
  </ul>
</details>

{/* Software and tools section */}
<div className="about-software">
  <h3>Software & Tools</h3>

{/* CAD and 3D Design software */}
<div className="software-category">
  <h4>
  <span className="software-number">01</span>
  CAD & 3D Design
</h4>

  <ul className="software-list">
    <li>
      <span>SolidWorks</span>
      <span className="software-level">Proficient</span>
    </li>
    <li>
      <span>Blender</span>
      <span className="software-level">Working Knowledge</span>
    </li>
    <li>
      <span>Autodesk Maya</span>
      <span className="software-level">Currently Learning</span>
    </li>
  </ul>
</div>

{/* Graphic and Visual Design software */}
<div className="software-category">
  <h4>
  <span className="software-number">02</span>
  Graphic & Visual Design
  </h4>

  <ul className="software-list">
    <li>
      <span>Affinity Suite</span>
      <span className="software-level">Advanced</span>
    </li>
    <li>
      <span>Procreate</span>
      <span className="software-level">Proficient</span>
    </li>
    <li>
      <span>Figma</span>
      <span className="software-level">Working Knowledge</span>
    </li>
  </ul>
</div>

{/* Coding and Interactive Technology software */}
<div className="software-category">
  <h4>
  <span className="software-number">03</span>
  Coding & Interactive Technology
  </h4>

  <ul className="software-list">
    <li>
      <span>React</span>
      <span className="software-level">Currently Learning</span>
    </li>
    <li>
      <span>Processing</span>
      <span className="software-level">Currently Learning</span>
    </li>
    <li>
      <span>Arduino</span>
      <span className="software-level">Working Knowledge</span>
    </li>
  </ul>
</div>

</div>

</section>

{/* My education and experience timeline */}
<section className="about-journey">
  <h2>My Journey So Far</h2>

{/* Timeline container */}
<div className="journey-timeline">

  {/* MSc milestone */}
  <div className="journey-item">
    <span className="journey-year">2026 – Present</span>

    <div className="journey-content">
      <h3>MSc Interaction & Experience Design</h3>
      <p className="journey-location">
        University of Limerick
      </p>
      <p className="journey-description">
        Building on my product design background by exploring
        the relationship between people, design and technology,
        combining human-computer interaction, design theory and
        research with digital modelling, creative coding and
        hands-on prototyping.
      </p>
    </div>
  </div>

{/* Undergraduate degree milestone */}
<div className="journey-item journey-graduation">
  <span className="journey-year">2022 – 2026</span>

  <div className="journey-content">
    <h3>BSc Product Design & Technology</h3>

    <p className="journey-location">
      University of Limerick · 2:1 Honours
    </p>

    <p className="journey-description">
      Built a strong foundation in product design, combining
      research, concept development, engineering principles,
      manufacturing processes and hands-on prototyping to
      bring ideas from concept to production.
    </p>
  </div>
</div>

{/* BD Medical Scholarship milestone */}
<div className="journey-item journey-item-small journey-award">
  <span className="journey-year">2026</span>

  <div className="journey-content">
    <h3>BD Medical Women in Engineering Scholarship</h3>
    <p className="journey-location">
    Becton, Dickinson and Company (BD)
  </p>
  </div>
</div>

{/* Nós-Nua industry placement milestone */}
<div className="journey-item journey-placement">
  <span className="journey-year">2025</span>

  <div className="journey-content">
    <h3>Product Design & Creative Development Placement</h3>

    <p className="journey-location">
      Nós-Nua
    </p>

    <p className="journey-description">
      Worked on packaging, product labels, photography,
      instructional content and Shopify e-commerce,
      supporting the development and presentation
      of Irish dance accessories.
    </p>
  </div>
</div>


</div>
</section>

</main>
  
{/* Final About page call-to-action */}
<section className="about-cta">
  <div className="about-cta-content">
    <span className="about-cta-label">WHAT'S NEXT?</span>

    <h2>Explore My Work.</h2>

    <p>
      Take a look at the projects, processes and ideas
      behind my design work.
    </p>

    <div className="about-cta-buttons">
      <a href="#/projects" className="about-cta-primary">
        View Projects
      </a>

      <a href="#/contact" className="about-cta-secondary">
        Contact Me
      </a>
    </div>
  </div>
</section>
  
{/* puts my reusable footer at the bottom of the about page */}
<Footer />
</div>

    );
}
export default About;