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
                Frontend developer with experience in building optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("hero/development.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis, voluptate. Reprehenderit officiis, molestias tempore
                voluptate ipsum fugit perferendis quae voluptatibus vero rem
                laborum? Animi tempora quos ducimus accusantium enim aspernatur.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
