export type Developer = {
  name: string;
  role: string;
  image: string;
  linkedinURL: string;
  githubURL: string;
  description?: string;
};

export const getDevelopers = (): Developer[] => [
  {
    name: "Xynil Jhed Lacap",
    role: "Full-Stack Developer && Project Manager",
    image: "/xynil-pic.jpg",
    linkedinURL: "",
    githubURL: "",
  },
  {
    name: "Janna Andrea Justiniano",
    role: "UI/UX",
    image: "/janna-pic.jpg",
    linkedinURL: "",
    githubURL: "",
  },
  {
    name: "John Aiverson Abong",
    role: "Docs",
    image: "/aiverson-pic.jpg",
    linkedinURL: "",
    githubURL: "",
  },
  {
    name: "Raphael Andre Mercado",
    role: "Full-stack Developer",
    image: "/mercado-pic.jpg",
    linkedinURL: "",
    githubURL: "",
  },
];
