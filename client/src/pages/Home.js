import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import "./Home.css";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="home-container">
        <motion.img
          src={profile}
          alt="Dastgir"
          className="profile-img"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="home-text"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Dastgir Bashir Hukkeri</h1>
          <h3>MERN Stack Developer</h3>
          <p>
            BCA Student | Full Stack Developer | Creative Thinker | Problem Solver
          </p>

          <div className="buttons">
            <a href="https://github.com/dastgirhukkeri78654-sketch" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/dastgir-hukkeri-5b7058332/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
