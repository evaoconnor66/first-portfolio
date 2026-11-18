
/* Stores information about all my portfolio projects */
export const projects = [

  // My Interactive Media Workshop video production project
  {
    id: "click-into-the-moment",
    title: "Click Into the Moment",
    type: "Video Production | Creative Direction | Visual Storytelling",
    date: "2026-11-13",
    image: `${import.meta.env.BASE_URL}images/click-into-the-moment/video-cover.jpeg`,
    description:
      "A nostalgic promotional film for the Easypix 35mm camera, exploring friendship and the moments worth capturing.",
  },

  // Interactive Media Workshop – Photography Series
  // This project contains my three photographs exploring identity and creativity.
  {
    id: "photography-series",
    title: "Photographic Series",
    image: `${import.meta.env.BASE_URL}images/photography-series/photography-cover.jpg`,
    date: "2026-10-09",
    type: "Photography | Visual Storytelling",
    description:
      "A three-part photographic series exploring identity, personal interests and visual storytelling.",
  },
  
  {
    id: "equia",
    title: "Equia",
    //featured: true, // Shows Equia as my main featured project
    image: `${import.meta.env.BASE_URL}images/equia/equia-cover.png`,
    date: "2026-05-01",
    type: "Product Design | UX/UI",
    description:
      "A connected equine health and recovery system combining physical product design and a digital experience.",
  },
  {
    id: "nos-nua",
    title: "Nós-Nua",
    image: `${import.meta.env.BASE_URL}images/other work/nos-nua-cover.png`,
    date: "2025-09-01",
    type: "Commercial Design | Branding | Web Design",
    description:
      "Commercial design work including packaging, photography and website development.",
  },

  // NUVAIR project — image and details can be updated later
{
  id: "nuvair",
  title: "NUVAIR",
  image: `${import.meta.env.BASE_URL}images/other work/nuvair-cover.jpeg`,
  date: "2025-11-01",
  type: "Product Design | Concept Development",
  description: "Product design concept exploring form and functionality.",
},

/* PROJECT TEMPLATE — saved for adding future projects
{
  id: "coming-soon-1",
  title: "Coming Soon",
  image: "",
  date: "2026-01-01",
  type: "Future Project",
  description: "A new design project will be added here.",
},
*/

/* OLD CODE — second Coming Soon placeholder
   Saved as a reference for adding future projects.
{
  id: "coming-soon-2",
  title: "Coming Soon",
  image: "",
  date: "2026-01-01",
  type: "Future Project",
  description: "Another design project will be added here.",
},
*/

];

/* Automatically sorts projects by completion date, newest first */
export const sortedProjects = [...projects].sort((a, b) =>
  b.date.localeCompare(a.date)
);
