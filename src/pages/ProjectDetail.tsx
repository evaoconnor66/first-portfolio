
import { Link, useParams } from "react-router";
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

{/* Allows visitors to return to the main projects page */}
<Link to="/projects" className="back-to-projects">
  ← Back to Projects
</Link>

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


{/* OLD CODE — displayed a cover image on every project page

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

*/}

{/* NEW CODE — displays the video for Click Into the Moment */}
{/* All other projects continue displaying their original cover images */}

<div className="project-detail-image">
  {project.id === "click-into-the-moment" ? (

    // Shows the video instead of the cover image
    <video
      className="project-video"
      controls
      playsInline
      poster={project.image}
    >
      <source
        src={`${import.meta.env.BASE_URL}videos/click-into-the-moment.mp4`}
        type="video/mp4"
      />
      Your browser does not support video playback.
    </video>

  ) : project.image ? (

    // Shows the cover image for every other project
    <img
      src={project.image}
      alt={`${project.title} project cover`}
      className="project-cover-image"
    />

  ) : (
    "Image Placeholder"
  )}
</div>

{/*============================================
shows the content for my photography project 
============================================*/}

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
    src={`${import.meta.env.BASE_URL}images/equia/equia-research.png`}
    alt="Equia research into equine back discomfort"
    className="process-image"
  />
  <img
  src={`${import.meta.env.BASE_URL}images/equia/equia-insights.png`}
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
  src={`${import.meta.env.BASE_URL}images/equia/equia-concepts.png`}
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
  src={`${import.meta.env.BASE_URL}images/equia/equia-ergonomics.png`}
  alt="Four clay prototypes exploring handheld grip ergonomics, thumb positioning and form refinement"
  className="process-image"
/>
<img
  src={`${import.meta.env.BASE_URL}images/equia/equia-rug-prototyping.png`}
  alt="Recovery rug development showing pattern making, closure refinement, heating placement and physical prototyping"
  className="process-image"
/>
<img
  src={`${import.meta.env.BASE_URL}images/equia/equia-electronics.png`}
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
  src={`${import.meta.env.BASE_URL}images/equia/equia-testing.png`}
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
  src={`${import.meta.env.BASE_URL}images/equia/equia-exploded-cad.png`}
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
    src={`${import.meta.env.BASE_URL}images/equia/equia-manufacturing-top.png`}
    alt="CAD showing battery compartment and internal screw mounting"
  />

  <img
    src={`${import.meta.env.BASE_URL}images/equia/equia-manufacturing-bottom.png`}
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
    src={`${import.meta.env.BASE_URL}images/equia/equia-assembly-01-04.png`}
    alt="Roller assembly steps 1 to 4"
  />
  <img
    src={`${import.meta.env.BASE_URL}images/equia/equia-assembly-05-08.png`}
    alt="Roller assembly steps 5 to 8"
  />
  <img
    src={`${import.meta.env.BASE_URL}images/equia/equia-assembly-09-12.png`}
    alt="Roller assembly steps 9 to 12"
  />
  <img
    src={`${import.meta.env.BASE_URL}images/equia/equia-assembly-13-17.png`}
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
  src={`${import.meta.env.BASE_URL}images/equia/equia-disassembly.png`}
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
  src={`${import.meta.env.BASE_URL}images/equia/equia-rug-construction.png`}
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
    src={`${import.meta.env.BASE_URL}images/equia/equia-rug-sewing-01-04.png`}
    alt="Recovery rug sewing steps 1 to 4"
  />

  <img
    src={`${import.meta.env.BASE_URL}images/equia/equia-rug-sewing-05-07.png`}
    alt="Recovery rug sewing steps 5 to 7"
  />

  <img
    src={`${import.meta.env.BASE_URL}images/equia/equia-rug-sewing-08-10.png`}
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
      src={`${import.meta.env.BASE_URL}images/equia/roller-prototype-finishing.png`}
      alt="Finishing the 3D printed scanner prototype"
    />
    <img
      src={`${import.meta.env.BASE_URL}images/equia/roller-prototype-handheld.png`}
      alt="Handheld scanner prototype"
    />
    <img
  src={`${import.meta.env.BASE_URL}images/equia/roller-prototype-final.png`}
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

{/*============================================
shows the content for my photography project 
============================================*/}

{/* Displays extra content only for my Photographic Series project */}
{project.id === "photography-series" && (
  <section className="photography-project">

    {/* Displays the first photograph from my assignment */}
<div className="photography-stage">

  {/* Identifies the photograph */}
  <h3>01 - Professional Headshot</h3>

  {/* Displays my professional portrait */}
  <img
    src={`${import.meta.env.BASE_URL}images/photography-series/photography-portrait.jpeg`}
    alt="Professional headshot taken outdoors at the University of Limerick"
    className="photography-image"
  />

{/* Explains the creative decisions behind my professional headshot */}
<p>
For my professional headshot, I wanted to create something that felt confident,
creative and approachable, while still looking professional enough for my portfolio. 
I chose to take the photograph at the University of Limerick because I liked the 
natural lighting and how the autumn colours complemented my hair. I wore a simple 
black top to keep the focus on my face without distracting from the background.
When composing the photograph, I used the 3 × 3 grid on my phone to help position 
myself within the frame. I also experimented with cropping and editing to create a 
more balanced image. I reduced the highlights and slightly increased the shadows to 
improve the lighting, while adjusting the portrait depth to make the blur around my 
hair look more natural. I wanted the final photograph to feel polished without 
looking overly edited.
</p>

{/* Shows the technical camera settings used for my portrait */}
<div className="photography-settings">

  <h4>Camera Settings</h4>

  <p>
    <strong>Camera:</strong> iPhone 17 Pro Max
  </p>

  <p>
    <strong>Focal Length:</strong> 48 mm equivalent
  </p>

  <p>
    <strong>Aperture:</strong> f/1.78
  </p>

  <p>
    <strong>ISO:</strong> 100
  </p>

  <p>
    <strong>Shutter Speed:</strong> 1/657 sec
  </p>

</div>

{/* Explains the editing adjustments I made to my portrait */}
<div className="photography-editing">

  <h4>Editing & Adjustments</h4>

  <p>
    I wanted to improve the lighting without making the photograph
    look overly edited. I reduced the highlights to balance the
    brighter areas and increased the shadows to bring out more
    detail. I also adjusted the portrait depth because the original
    background blur made the edges of my hair look unnatural.
    Increasing the depth setting helped create a softer, more
    realistic finish.
  </p>

  {/* Lists the exact adjustments used when editing */}
  <p><strong>Highlights:</strong> -15</p>
  <p><strong>Shadows:</strong> +10</p>
  <p><strong>Portrait Depth:</strong> f/4.5 to f/5.6</p>

</div>

</div>

{/* Displays the second photograph from my assignment */}
<div className="photography-stage">

  {/* Identifies my nighttime photography project */}
  <h3>02 - Aesthetic Photograph</h3>

  {/* Displays my photograph of the Needle sculpture at UL */}
  <img
    src={`${import.meta.env.BASE_URL}images/photography-series/photography-sculpture.jpeg`}
    alt="The Needle sculpture at the University of Limerick at night, reflected in water"
    className="photography-image"
  />

{/* Explains my creative decisions and composition for the nighttime photograph */}
<p>
  For my aesthetic photograph, I wanted to experiment with
  nighttime photography, particularly how lights reflect off
  water. I was drawn to the Needle sculpture at the University
  of Limerick because I liked its movement and the way it
  reflected in the water below.

  I positioned the sculpture in the centre of the frame and
  stepped back to include the surrounding trees and lighting.
  I really liked the contrast between the warm yellow
  streetlights and the dark night sky. The reflections helped
  bring everything together, creating a balanced composition
  with a calm, peaceful atmosphere.
</p>

{/* Shows the camera settings used for my nighttime photograph */}
<div className="photography-settings">

  <h4>Camera Settings</h4>

  <p><strong>Camera:</strong> iPhone 17 Pro Max</p>

  <p><strong>Focal Length:</strong> 48 mm equivalent</p>

  <p><strong>Aperture:</strong> f/1.78</p>

  <p><strong>ISO:</strong> 1600</p>

  <p><strong>Shutter Speed:</strong> 1/17 sec</p>

  <p><strong>Lighting:</strong> Existing streetlights, no flash</p>

</div>

{/* Explains how I edited my nighttime photograph */}
<div className="photography-editing">

  <h4>Editing & Adjustments</h4>

  <p>
    When editing this photograph, I wanted to keep the warm,
    peaceful atmosphere while improving the overall image.
    I reduced the highlights to stop the streetlights from
    appearing too bright and adjusted the warmth to tone down
    some of the strong yellow lighting. I also applied noise
    reduction to make the darker areas look less grainy.
    Finally, I cropped out the brick paving at the bottom
    so the water became the foreground, giving the
    photograph a cleaner composition.
  </p>

  {/* Lists the exact editing adjustments from my assignment */}
  <p><strong>Highlights:</strong> -30</p>
  <p><strong>Warmth:</strong> -15</p>
  <p><strong>Noise Reduction:</strong> 20</p>
  <p><strong>Cropping:</strong> Removed brick paving from the bottom</p>

</div>

</div>

{/* Displays the third photograph from my assignment */}
<div className="photography-stage">

  {/* Introduces my flat-lay photograph */}
  <h3>03 - My Passions</h3>

  {/* Displays the photograph representing my interests */}
  <img
    src={`${import.meta.env.BASE_URL}images/photography-series/photography-cover.jpg`}
    alt="Flat-lay photograph of my creative hobbies and personal interests"
    className="photography-image"
  />

{/* Explains the inspiration and composition behind my flat-lay photograph */}
<p>
  For my final photograph, I wanted to capture the different
  things I am passionate about. I have so many interests that
  I found it difficult to choose just one, so I decided to
  bring them together in a single image that represents who
  I am.

  I created a flat-lay composition using objects from my
  hobbies, including horse riding, painting, drawing, sewing,
  baking and beauty. I chose a white background to help the
  colourful objects stand out and arranged them loosely by
  category, allowing some to overlap to bring everything
  together. I experimented with several different layouts
  before choosing the final arrangement, as I felt it best
  represented my personality while still creating a balanced
  composition.
</p>

{/* Shows the camera settings and equipment used for my flat-lay photograph */}
<div className="photography-settings">

  <h4>Camera Settings</h4>

  <p><strong>Camera:</strong> iPhone 17 Pro Max</p>

  <p><strong>Camera App:</strong> Lumina</p>

  <p><strong>Focal Length:</strong> 48 mm equivalent</p>

  <p><strong>Aperture:</strong> f/1.8</p>

  <p><strong>ISO:</strong> 100</p>

  <p><strong>Shutter Speed:</strong> 1/100 sec</p>

  <p><strong>Lighting:</strong> Natural daylight, no flash</p>

  <p><strong>Equipment:</strong> Tripod</p>

</div>

{/* Explains how I edited my flat-lay photograph */}
<div className="photography-editing">

  <h4>Editing & Adjustments</h4>

  <p>
    When editing this photograph, I wanted the background
    to appear as white as possible while keeping the colours
    of the objects bright and natural. I adjusted the exposure,
    brilliance and shadows to brighten the image, then
    increased the contrast, vibrance and definition to help
    the colours and smaller details stand out. I also reduced
    the highlights to prevent the brighter areas from
    looking too harsh.
  </p>

  {/* Lists the exact editing adjustments from my assignment */}
  <p><strong>Exposure:</strong> +5</p>
  <p><strong>Brilliance:</strong> +15</p>
  <p><strong>Shadows:</strong> +10</p>
  <p><strong>Contrast:</strong> +5</p>
  <p><strong>Vibrance:</strong> +10</p>
  <p><strong>Definition:</strong> +10</p>
  <p><strong>Highlights:</strong> -10</p>

</div>

</div>

  </section>
)}

{/*============================================
shows the content for my video production 
============================================*/}


{/* Displays my video production project only on its own page */}
{project.id === "click-into-the-moment" && (
  <section className="video-project">

{/* Introduces the group production blog */}
<h2>Blog 1 — Group Video Production</h2>

    {/* Introduces the background and purpose of my video project */}
    <h3>Project Overview</h3>

    {/* Explains the concept and purpose of my video production project */}
<p>
  Click Into the Moment is a nostalgic promotional film created
  for the Easypix 35mm film camera. The project explores friendship,
  shared experiences and the importance of capturing everyday
  moments through analogue photography.
</p>

{/* Explains how the video concept was developed */}
<h3>Concept Development</h3>

<p>
  Our group explored several ideas for promoting the Easypix 35mm
  camera, including a grandmother sharing old photographs and
  friends capturing a day together. We developed these ideas
  into a story about an international student looking back
  on her time in Limerick, using film photographs to connect
  friendship, memories and nostalgia.
</p>

{/* Displays my initial concept brainstorming */}
<img
  src={`${import.meta.env.BASE_URL}images/click-into-the-moment/concept-development.jpg`}
  alt="Initial brainstorming exploring the Easypix camera concept and target audience"
  className="video-process-image"
/>



{/* Explains the planning process before filming */}
<h3>Pre-production & Storyboarding</h3>

<p>
  During pre-production, our group developed the storyline,
  planned the individual scenes and created a storyboard
  to guide filming. I took responsibility for writing and
  organising the final script, making sure the actions,
  camera shots and transitions were clearly described.
</p>

<p>
  The storyboard helped us visualise how the scenes would
  connect and how the Easypix camera would be incorporated
  into the story. It also provided a reference during filming,
  although some shots needed to be adapted to suit the
  locations and conditions.
</p>

{/* Displays the group storyboard used during planning */}
<img
  src={`${import.meta.env.BASE_URL}images/click-into-the-moment/storyboard.jpg`}
  alt="Hand-drawn storyboard showing the planned camera shots and scenes around Limerick"
  className="video-process-image video-storyboard-image"
/>

{/* Credits the group member who illustrated the storyboard */}
<p className="video-image-caption">
  Storyboard illustrating the planned shot sequence for
  Click Into the Moment. Illustrated by a group member
  as part of our collaborative pre-production process.
</p>

{/* Explains the filming process and locations */}
<h3>Filming & Production</h3>

<p>
  Filming took place across two stages. The bedroom scenes
  were filmed separately by Abby and Martina, while I was
  involved in filming around Limerick city centre. Our
  locations included the Treaty Stone, St Mary's Cathedral
  and the Milk Market, providing recognisable backdrops
  for the story.
</p>

<p>
  During filming, I helped direct the group, organise shots
  and coordinate movements to capture natural interactions
  between the characters. We followed our storyboard while
  adapting camera positions and scenes when necessary.
  I also appeared in the advertisement and helped capture
  photographs using my Easypix 35mm camera.
</p>


{/* Explains the group's cinematography decisions */}
<h3>Cinematography & Shot Selection</h3>

<p>
  We used a combination of wide shots, medium shots
  and close-ups to communicate the story visually.
  Wide shots established the locations around
  Limerick, while medium shots captured the friends
  walking, laughing and interacting naturally.
  Close-ups focused on the Easypix camera,
  demonstrating how it was held and used to
  capture photographs.
</p>

<p>
  We also used shots from the photographer's
  perspective, moving between someone taking a
  photograph and footage of the moment being
  captured. This helped viewers feel part of the
  experience. All footage was filmed in landscape
  orientation using an iPhone 17 and tripod,
  helping us maintain steady and consistent shots.
</p>

{/* Explains the editing techniques used in the video */}
<h3>Editing & Visual Effects</h3>

<p>
  Our group used CapCut to edit the advertisement,
  combining transitions, visual effects and shorter
  cuts to create a consistent narrative. At the
  beginning, the video zooms into the Easypix camera
  lens in Lea's bedroom before transitioning into
  her memories. The same transition is used to
  return to the bedroom at the end, connecting
  the flashback with the present.
</p>

<p>
  When a character takes a photograph, the footage
  briefly freezes and the actual developed 35mm
  photograph appears on screen. This allows viewers
  to see the results of using the camera. We also
  shortened longer scenes to maintain the pace
  of the advertisement and created a stop-motion
  sequence featuring the Easypix camera surrounded
  by printed photographs for the ending.
</p>

{/* Explains the soundtrack and sound design */}
<h3>Sound & Music</h3>

<p>
  For the background music, our group selected
  The Trip by Marat Mukhamadiev (MarkJuly),
  sourced from Pixabay. Its upbeat acoustic
  sound complemented the scenes of friends
  exploring Limerick and helped create a
  happy, nostalgic atmosphere.
</p>

<p>
  We chose not to include dialogue, allowing
  the music, actions and photographs to tell
  the story. Camera shutter-click sound effects
  were added whenever a photograph was taken
  and the developed 35mm image appeared.
  These sounds helped connect the photographs
  to the Easypix camera and made the
  interactions feel more realistic.
</p>

{/* References for music and sound effects */}
<p>References</p>

<p>
  Mukhamadiev, M. (n.d.) <em>The Trip</em> [Music].
  Pixabay. Available at:{" "}
  <a
    href="https://pixabay.com/music/upbeat-uplifting-acoustic-indie-folk-the-trip-112317/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Pixabay - The Trip
  </a>
</p>

<p>
  Kaua Silbershlach Parodes (n.d.) <em>Shutter Click 2</em>
  [Sound effect]. Pixabay. Available at:{" "}
  <a
    href="https://pixabay.com/sound-effects/technology-shutter-click-2-494026/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Pixabay - Shutter Click 2
  </a>
</p>

{/* Explains the challenges encountered during production */}
<h3>Challenges & Problem-Solving</h3>

<p>
  One of the main challenges was coordinating filming
  schedules while working around unpredictable weather.
  Most scenes were filmed outdoors, and the overcast
  conditions created uncertainty when using slightly
  expired 35mm film, as we could not check the photographs
  until they were developed.
</p>

<p>
  Filming in public spaces also required flexibility.
  We had to position equipment safely, avoid obstructing
  pedestrians and adapt some of our planned shots.
  Maintaining continuity was particularly important,
  especially when the camera was passed between characters
  and the perspective needed to change with them.
</p>

{/* Reflects on the final outcome and learning */}
<h3>Final Outcome</h3>

<p>
  The final advertisement brings together our original
  concept of friendship, nostalgia and analogue photography.
  The developed 35mm photographs became part of the finished
  video, reinforcing the idea of capturing meaningful moments
  rather than focusing on creating perfect images.
</p>

{/* Displays four developed 35mm film photographs */}
<div className="video-film-grid">
  <img
    src={`${import.meta.env.BASE_URL}images/click-into-the-moment/film-photo-03.jpg`}
    alt="Developed 35mm film photograph 3"
  />

  <img
    src={`${import.meta.env.BASE_URL}images/click-into-the-moment/film-photo-01.jpg`}
    alt="Developed 35mm film photograph 1"
  />

  <img
    src={`${import.meta.env.BASE_URL}images/click-into-the-moment/film-photo-02.jpg`}
    alt="Developed 35mm film photograph 2"
  />

  <img
    src={`${import.meta.env.BASE_URL}images/click-into-the-moment/film-photo-04.jpg`}
    alt="Developed 35mm film photograph 4"
  />
</div>

{/* Individual reflection on the video production project */}
{/* Visually separates the group blog from my individual reflection */}
<hr className="video-blog-divider" />
{/* Separates the individual reflection from the group production blog */}
<h2>Blog 2 - Individual Production Reflection</h2>


{/* Explains my individual contribution to the group project */}
<h3>My Role & Responsibilities</h3>

<p>
  As director, I helped shape the creative direction of the
  advertisement, guiding how the story would be communicated
  through each scene. I contributed to the group brainstorming
  and script development before organising and writing the
  final script to support our storyboard and filming.
</p>

<p>
  During production, I directed scenes, helped with filming
  and appeared in the advertisement. I also supplied the
  Easypix 35mm camera, organised the development of our
  film photographs and led the preparation of our group
  production report.
</p>

{/* Displays a behind-the-scenes photograph from filming */}
<img
  src={`${import.meta.env.BASE_URL}images/click-into-the-moment/behind-the-scenes.jpg`}
  alt="Behind-the-scenes photograph taken during filming in Limerick city centre"
  className="video-process-image video-behind-scenes-image"
/>

{/* Describes the photograph */}
<p className="video-image-caption">
  Behind the scenes during the filming of
  Click Into the Moment in Limerick city centre.
</p>

<p>
  One of the things I enjoyed most about this project was
  developing my interest in film photography. I originally
  bought the Easypix camera because I liked the idea of
  capturing a moment without immediately checking or
  retaking the photograph. Seeing our developed photographs
  reinforced this for me. Not every image turned out
  perfectly, particularly because of the weather and older
  film, but I felt that these imperfections added to their
  character. This connected closely with the message of
  our advertisement: enjoying the moment rather than
  trying to capture the perfect photograph.
</p>

{/* Reflects on the skills developed through directing */}
<p>
  Taking on the role of director was a valuable learning
  experience. Initially, I found it challenging to explain
  how I wanted scenes to look while making sure everyone
  felt comfortable in front of the camera. As filming
  progressed, I became more confident in giving clear,
  simple directions and encouraging natural interactions.
  I also learned the importance of trusting my group,
  particularly when I was appearing in scenes and could
  not see exactly what was being filmed. This experience
  helped me develop my communication, teamwork and
  creative decision-making skills.
</p>

{/* Reflects on challenges and future improvements */}
<p>
  One of the biggest things I learned was the importance
  of continuity when telling a story through video.
  Because our advertisement involved passing the film
  camera between friends, we had to pay attention to
  whose perspective each shot represented. I also
  underestimated how much planning was needed to turn
  our storyboard into actual footage, particularly when
  working around the weather and public locations.
  In future projects, I would plan alternative shots,
  allow more flexibility in the filming schedule and
  document more of the behind-the-scenes process.
</p>

{/* Concludes the personal reflection */}
<p>
  Overall, this project gave me a greater appreciation
  for the creative process behind video production.
  Before this assignment, filmmaking was not something
  I had a particularly strong interest in, but I really
  enjoyed developing our ideas into a finished
  advertisement. I especially enjoyed working behind
  the camera and seeing how our different contributions
  came together. The experience has encouraged me to
  explore photography and filmmaking further, while
  giving me more confidence in directing and
  communicating creative ideas.
</p>

  </section>
)}
</main>

{/* puts my reusable footer at the bottom of the project page */}
<Footer />
    </div>
  );
}

export default ProjectDetail;