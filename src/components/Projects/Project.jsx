import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectContainer}>
        {projects.map((project) => {
          return (
            <div key={project.id} className={styles.projects}>
              <div className={styles.image}>
                <img src={getImageUrl(project.imageSrc)} alt="" />
              </div>
              <div className={styles.projectData}>
                <h2 className={styles.porjectTitle}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.skillContainer}>
                  <h3>Tools used</h3>
                  <ul className={styles.skills}>
                    {project.skills.map((skill, id) => {
                      return (
                        <li className={styles.skill} key={id}>
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={styles.links}>
                  <button>
                    <a className={styles.link} href={project.demo}>
                      Live link
                    </a>
                  </button>
                  <button>
                    <a className={styles.link} href={project.source}>
                      Source code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
