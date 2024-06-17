/* eslint-disable react/prop-types */
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const { imageSrc, title, description, skills, demo, source } = project;

  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${getImageUrl(imageSrc)})` }}
      ></div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>
          Demo
        </a>
        <a className={styles.link} href={source}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
