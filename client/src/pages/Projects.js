import "./Projects.css";
import portfolioImg from "../assets/project1.jpg";
import restaurantImg from "../assets/project2.jpg";
import taskImg from "../assets/project3.jpg";

export default function Projects() {
  const projects = [
    {
      title: "MERN Portfolio Website",
      image: portfolioImg,
      description:
        "A full stack portfolio website built using MERN stack. It includes contact form integration with MongoDB, smooth navigation and responsive design.",
      tech: "React, Node.js, Express, MongoDB",
      github: "https://github.com/dastgirhukkeri78654-sketch/mern-portfolio",
    },
    {
      title: "Restaurant Web Application",
      image: restaurantImg,
      description:
        "A complete restaurant management website with login authentication, menu display and backend database integration.",
      tech: "React, Node.js, MongoDB",
      github: "https://github.com/dastgirhukkeri78654-sketch/restaurant",
    },
    {
      title: "Task Manager App",
      image: taskImg,
      description:
        "A task management system where users can create, update and delete daily tasks with proper CRUD operations.",
      tech: "MERN Stack",
      github: "https://github.com/dastgirhukkeri78654-sketch/Taskmanageapp",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>
            <a href={project.github} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
