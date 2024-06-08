import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("hero/main2.png")}
          alt="about"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("hero/development.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Software developer specializing in Front-End Development with
                nearly 2 years of experience crafting dynamic user interfaces.
                Proficient in JavaScript, React, HTML, CSS & various styling
                frameworks. Bringing strong problem-solving skills and a passion
                for creating responsive web experiences.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}></div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default About;
