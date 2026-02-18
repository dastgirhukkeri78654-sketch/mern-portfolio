import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="card">
        <h1>My Skills & Projects</h1>

        <h3>Technical Skills</h3>
        <ul>
          <li>C Programming</li>
          <li>Java</li>
          <li>Python</li>
          <li>Data Structures & Algorithms (using C)</li>
          <li>HTML, CSS, JavaScript</li>
          <li>React.js, Node.js, Express.js</li>
          <li>MongoDB</li>
          <li>UI/UX Design using Figma</li>
        </ul>

        <h3>Soft Skills</h3>
        <ul>
          <li>Creative Thinking</li>
          <li>Problem Solving</li>
          <li>Logical Thinking</li>
          <li>Team Collaboration</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Projects;
