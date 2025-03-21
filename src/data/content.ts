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
      "Portfolio Website – Showcase interaktif dengan desain modern, dibangun dengan React dan TailwindCSS.",
    image: "public/image/portoflio.png",
    tags: ["React", "TailwindCSS", "Typescript"],
    demoUrl: "rizzfar.github.io",
    githubUrl: "http://github.com/rizzfar/rizzfar.github.io",
    category : 'frontend',
  },
  {
    title: "Anagram Search",
    description:
      "Anagram Search adalah aplikasi web untuk mencari anagram dengan cepat dan efisien menggunakan algoritma Stenhaus Johnson Rotter.",
    image: "public/image/anagram.png",
    tags: ["Javascript", "SCSS", "Web Component"],
    demoUrl: "https://rizzfar.github.io/anagram/",
    githubUrl: "https://github.com/rizzfar/anagram",
    category : 'frontend',
  },
  {
    title: "Bookshelf API",
    description:
      "Bookshelf API adalah backend Node.js untuk mengelola koleksi buku, mendukung CRUD, cepat, dan scalable, siap untuk integrasi.",
    image: "public/image/bookshelf.png",
    tags: ["Postman", "NodeJS", "Google Cloud"],
    demoUrl: "#",
    githubUrl: "#",
    category : 'backend',
  },
  {
    title: "Suwit Jawa Games V.2",
    description:
      "Permainan tradisional Suwit Jawa versi 2 dengan tampilan responsif dan logika permainan yang interaktif.",
    image: "public/image/suwitjawa.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
    category : 'frontend',
  },
  {
    title: "Suwit Jawa Games V.2",
    description:
      "Permainan tradisional Suwit Jawa versi 2 dengan tampilan responsif dan logika permainan yang interaktif.",
    image: "public/image/suwitjawa.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
    category : 'UI/UX',
  },
];

export { navItems, timelineItems, certificates, projects };
