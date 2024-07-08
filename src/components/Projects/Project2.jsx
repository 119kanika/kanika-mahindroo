import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    console.log(projects[currentIndex]);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.carousel}>
        <button className={styles.buttons} onClick={prevProject}>
          <FaLessThan />
        </button>
        <ProjectCard
          project={projects[currentIndex]}
          className={styles.projects}
        />
        <button className={styles.buttons} onClick={nextProject}>
          <FaGreaterThan />
        </button>
      </div>
    </section>
  );
};

export default Project;
