import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <motion.div 
      className="about"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>
        I am Dastgir Bashir Hukkeri, BCA student (2nd Year, 4th Semester).  
        I am a passionate MERN Stack Developer with strong foundation in programming and web development.
      </p>

      <h2>Skills</h2>

      <div className="skills">
        <span>C</span>
        <span>Java</span>
        <span>Python</span>
        <span>DSA</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>UI/UX (Figma)</span>
      </div>
    </motion.div>
  );
}

export default About;
