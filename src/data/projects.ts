
/* Stores information about all my portfolio projects */
export const projects = [
  {
    id: "equia",
    title: "Equia",
    featured: true, // Shows Equia as my main featured project
    image: "/images/equia/equia-cover.png",
    date: "2026-05-01",
    type: "Product Design | UX/UI",
    description:
      "A connected equine health and recovery system combining physical product design and a digital experience.",
  },
  {
    id: "nos-nua",
    title: "Nós-Nua",
    image: "/images/other work/nos-nua-cover.png",
    date: "2025-12-01",
    type: "Commercial Design | Branding | Web Design",
    description:
      "Commercial design work including packaging, photography and website development.",
  },

  // NUVAIR project — image and details can be updated later
{
  id: "nuvair",
  title: "NUVAIR",
  image: "/images/other work/nuvair-cover.jpeg",
  date: "2026-01-01",
  type: "Product Design | Concept Development",
  description: "Product design concept exploring form and functionality.",
},

];

/* Automatically sorts projects by completion date, newest first */
export const sortedProjects = [...projects].sort((a, b) =>
  b.date.localeCompare(a.date)
);
