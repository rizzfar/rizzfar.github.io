import { GraduationCap, Briefcase, Award } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Beranda' },
  { path: '/about', label: 'Tentang Saya' },
  { path: '/projects', label: 'Proyek' },
  { path: '/skills', label: 'Skills' },
  { path: '/certificates', label: 'Sertifikat' },
  { path: '/contact', label: 'Kontak' },
];

const timelineItems = [
  {
    year: '2023-2027',
    title: 'Computer Science Bachelor Degree',
    institution: 'Universitas Komputer Indonesia (UNIKOM)',
    description: 'Graduated with honors, specializing in Web Development and UI/UX Design',
    icon: GraduationCap,
  },
  {
    year: '2024',
    title: 'Frontend Developer Expert Certification',
    institution: 'Dicoding Indonesia',
    description: 'Advanced certification in Web Development',
    icon: Award,
  },
  {
    year: '2023',
    title: 'Frontend Developer (Remote)',
    institution: 'Bandung Coders Community.',
    description: 'Developed modern web applications using React and Next.js',
    icon: Briefcase,
  },
];

const certificates = [
  {
    title: 'Frontend Developer Expert',
    issuer: 'Dicoding Indonesia',
    date: 'Januari 2024',
    image: 'public/certificate/certificate-expert.jpg',
    credentialUrl: '#',
  },
  {
    title: 'React Developer level Intermediate',
    issuer: 'IDCamp 2024 by Indosaat Oooredo Hutchison',
    date: 'Maret 2025',
    image: 'public/certificate/certicicate-idcamp(react).jpg',
    credentialUrl: '#',
  },
  {
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: 'Februari 2025',
    image: 'public/certificate/certificate-hackerrank.jpg',
    credentialUrl: '#',
  },
  {
    title: 'Javascript Intermediate (Gold)',
    issuer: 'Skilvul',
    date: 'July 2024',
    image: 'public/certificate/certificate-gold.jpg',
    credentialUrl: '#',
  },
  {
    title: 'UI/UX Design With Figma',
    issuer: 'Udemy',
    date: 'Oktober 2024',
    image: 'public/certificate/certificate-figma.jpg',
    credentialUrl: '#',
  },
  {
    title: 'Web Programming Basic',
    issuer: 'Jabar Digital Academy',
    date: 'March 2023',
    image: 'public/certificate/certificate-pemweb.jpg',
    credentialUrl: '#',
  },
  {
    title: 'Belajar Cepat Vue.JS',
    issuer: 'Codepolitan',
    date: 'Juni 2023',
    image: 'public/certificate/certificate-vue.jpg',
    credentialUrl: '#',
  },
  {
    title: 'Jquery Basic',
    issuer: 'Codepolitan',
    date: 'April 2023',
    image: 'public/certificate/certificate-jquery.jpg',
    credentialUrl: '#',
  },
  {
    title: 'Introduction Cyber Security',
    issuer: 'Cisco Academy',
    date: 'August 2023',
    image: 'public/certificate/certificate-cyber.jpg',
    credentialUrl: '#',
  },
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Website portofolio interaktif dengan React & TailwindCSS.",
    image: "public/image/portoflio.png",
    tags: ["React", "TailwindCSS", "Typescript"],
    demoUrl: "https://rizzfar.github.io",
    githubUrl: "http://github.com/rizzfar/rizzfar.github.io",
    category: "frontend",
  },
  {
    title: "Papua Website",
    description:
      "Website kampanye solidaritas untuk Papua.",
    image: "public/image/papua.png",
    tags: ["HTML", "CSS", "Javascript", "Webpack"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
  {
    title: "News Web Page",
    description:
      "Halaman web berita sederhana.",
    image: "public/image/news.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
  {
    title: "Anagram Search",
    description:
      "Aplikasi pencari anagram cepat berbasis algoritma.",
    image: "public/image/anagram.png",
    tags: ["Javascript", "SCSS", "Web Component"],
    demoUrl: "https://rizzfar.github.io/anagram/",
    githubUrl: "https://github.com/rizzfar/anagram",
    category: "frontend",
  },
  {
    title: "Bandung City Web Blog",
    description:
      "Web blog interaktif tentang kota Bandung.",
    image: "public/image/bandungcity.png",
    tags: ["ReactJS"],
    demoUrl: "https://rizzfar.github.io/bandungcity/",
    githubUrl: "https://github.com/rizzfar/bandungcity",
    category: "frontend",
  },
  {
    title: "Bookshelf API",
    description:
      "RESTful API untuk pengelolaan koleksi buku.",
    image: "public/image/bookshelf.png",
    tags: ["Postman", "NodeJS", "Google Cloud"],
    demoUrl: "#",
    githubUrl: "#",
    category: "backend",
  },
  {
    title: "Todolist App",
    description:
      "Aplikasi pencatat tugas harian yang simpel.",
    image: "public/image/todolist.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
  {
    title: "Suwit Jawa Games V.2",
    description:
      "Game Suwit Jawa dengan UI responsif & interaktif.",
    image: "public/image/suwitjawa.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
];

export { navItems, timelineItems, certificates, projects };
