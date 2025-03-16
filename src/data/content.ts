const navItems = [
  { path: '/', label: 'Beranda' },
  { path: '/about', label: 'Tentang Saya' },
  { path: '/projects', label: 'Projek' },
  { path: '/skills', label: 'Skills' },
  { path: '/certicate', label: 'Sertifikat' },
  { path: '/contact', label: 'Kontak' },
];

const projects = [
  {
    id: 3,
    title: "Portfolio Website",
    description: "Portfolio Website – Showcase interaktif dengan desain modern, dibangun dengan React dan TailwindCSS.",
    image: "public/portoflio.png",
    technologies: ["React", "TailwindCSS", "Typescript"],
    category: "frontend",
    github: "https://github.com/rizzfar/rizzfar.github.io",
    live: "https://github.com/rizzfar"
  },
  {
    title: "Anagram Search",
    description: "Anagram Search adalah aplikasi web untuk mencari anagram dengan cepat dan efisien menggunakan algoritma Stenhaus Johnson Rotter.",
    image: "public/anagram.png",
    technologies: ["Javascript", "SCSS", "Web Component"],
    category: "frontend",
    github: "https://github.com/rizzfar/anagram",
    live: "https://rizzfar.github.io/anagram/"
  },
  {
    id: 2,
    title: "Bookshelf API",
    description: "Bookshelf API adalah backend Node.js untuk mengelola koleksi buku, mendukung CRUD, cepat, dan scalable, siap untuk integrasi",
    image: "public/bookshelf.png",
    technologies: ["Postman", "NodeJS", "Google Cloud"],
    category: "backend",
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "Suwit Jawa Games V.2",
    description: "A robust API gateway service handling authentication, rate limiting, and request routing for microservices.",
    image: "public/suwitjawa.png",
    technologies: ["HTML", "CSS", "Javascript"],
    category: "frontend",
    github: "#",
    live: "#"
  }
];

export { navItems, projects };
