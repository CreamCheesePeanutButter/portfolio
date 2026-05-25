type Project = {
  name: string;
  tech: string[];
  ptype: "School" | "Personal" | "Work";
  position: string;
  date?: string;
  skillApplied: string[];
};

const projects: Project[] = [
  {
    name: "TradeStart",
    tech: ["Docker", "Git", "React", "TypeScript", "Flask", "MySQL", "Python"],
    ptype: "School",
    position: "Technical Manager",
    skillApplied: [
      "Served as Technical Manager, implementing Agile workflows and organizing sprint tasks using GitHub Kanban board for structured team collaboration.",
      "Developed backend APIs using Flask and Flask-CORS to handle trading logic, authentication, and SQL database communication.",
      "Designed and normalized MySQL database schemas for user accounts, stock transactions, portfolio tracking, and trade history.",
      "Built responsive frontend components in React with TypeScript for dashboard visualization and trading interactions.",
      "Integrated RESTful APIs between frontend and backend for real-time data communication and account management.",
      "Containerized application services using Docker to simplify development setup and deployment consistency.",
      "Implemented authentication and session handling to improve application security and user management.",
      "Participated in sprint planning, task delegation, and technical decision-making throughout the project lifecycle.",
    ],
  },

  {
    name: "Portfolio Website",
    tech: ["React", "TailwindCSS", "TypeScript", "Motion", "Vite"],
    ptype: "Personal",
    position: "Frontend Developer",
    skillApplied: [
      "Developed a responsive personal portfolio website using React and TailwindCSS.",
      "Implemented smooth animations and transitions using Motion for interactive user experience.",
      "Created reusable UI components and modular page layouts for maintainability.",
      "Optimized application performance with lazy loading and efficient component rendering.",
      "Designed mobile-friendly layouts with responsive Tailwind utility classes.",
      "Integrated interactive navigation with smooth scrolling between sections.",
    ],
  },

  {
    name: "StudyMate",
    tech: ["React", "Node.js", "TypeScript", "CSS", "Git"],
    ptype: "Personal",
    position: "Frontend Developer",
    date: "Jan 2026",
    skillApplied: [
      "Built a Chrome extension using React to help users organize tasks directly within the browser.",
      "Developed a responsive and interactive user interface using TypeScript, CSS, and React Hooks.",
      "Implemented task management features to improve productivity and user workflow efficiency.",
      "Applied Git version control for collaborative development and project tracking.",
      "Designed UML diagrams to improve maintainability, scalability, and future feature planning.",
      "Structured reusable React components for cleaner architecture and easier code maintenance.",
    ],
  },
];

export default function ProjectSlide() {
  return (
    <section className="w-full h-screen snap-start flex items-center justify-center">
      {/* <h1 className="text-5xl font-bold">My Projects</h1> */}
      <ol></ol>
    </section>
  );
}
