import { Project, Skill } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-commerce",
    description: "Advanced e-commerce platform with interactive data visualizations for sales analytics.",
    tags: ["React", "TypeScript", "CSS"],
    image: "https://i.ibb.co/4ZJnvmXw/ecommerce.png",
    link: "https://github.com/Sawera-Malik/E-commerce.git"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Weather forecasting app with real-time updates and dynamic UI based on weather conditions.",
    image: "https://i.ibb.co/KpDqyp6C/weather.png",
    tags: ["python", "django", "CSS"],
    link: "https://github.com/Sawera-Malik/Weather-app.git"
  },
  {
    id: 3,
    title: "Breakout Game",
    description: "Interactive Breakout game with dynamic brick layouts and score tracking features.",
    tags: ["Javascript", "CSS", "HTML"],
    image: "https://i.ibb.co/TDsvzv22/breakout.png",
    link: "https://github.com/Sawera-Malik/Break-out-game.git"
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: 90, category: "frontend" },
  { name: "Redux", level: 80, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Python", level: 60, category: "backend" },
  { name: "PostgreSQL", level: 60, category: "backend" },
  { name: "Bootstrap", level: 80, category: "design" },
  { name: "Ant Design", level: 80, category: "design" },
  { name: "Pubnub", level: 60, category: "tools" },
  {name: "firebase", level: 80, category: "tools" },
  {name: "remix", level: 50, category: "frontend" }
];
