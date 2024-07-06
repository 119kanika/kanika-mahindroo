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
        <p className={styles.aboutItemText}>
          As a Front-End Developer with a passion for creating beautiful and
          functional web experiences, I have nearly two years of experience in
          the field. I am proficient in JavaScript, React, HTML, CSS, and
          various styling frameworks, which enables me to build responsive and
          engaging user interfaces.
          <br />I am excited to collaborate on innovative projects that
          challenge me and offer opportunities for growth. Whether you're
          looking to develop a new website or enhance an existing application, I
          am committed to delivering high-quality, impactful solutions. Let’s
          work together and create something amazing!
        </p>
        <span>
          I’m a passionate Front-End Developer with nearly two years of
          experience in crafting dynamic user interfaces. Proficient in
          JavaScript, React, HTML, CSS, and various styling frameworks, I create
          responsive and visually appealing web experiences. I thrive on solving
          complex problems and stay updated with industry trends to ensure
          cutting-edge work. I’m eager to collaborate on innovative projects
          that challenge me and deliver high-quality results. Let's create
          something amazing together.
        </span>
        {/* <ul className={styles.aboutItems}>
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
        </ul> */}
      </div>
    </section>
  );
};

export default About;

{
  /* <li className={styles.aboutItem}>
  <div className={styles.aboutItemText}></div>
</li> */
}
