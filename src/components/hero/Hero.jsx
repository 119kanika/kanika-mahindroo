import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, my name is Kanika</h1>
        <p className={styles.description}>
          I'm a Frontend Developer and I design and code beautiful things.{" "}
          <br />
          Reach out for a quick chat!
        </p>
        <div className={styles.button}>
          <a
            className={styles.contactBtn}
            href="mailto:kanika.mahindroo@gmail.com"
          >
            Contact Me
          </a>
          <a
            className={styles.contactBtn}
            href="https://drive.google.com/file/d/1kf3HcafvK3flSHZYCOQLCd2wAVu7w-fc/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
      <div>
        <img
          className={styles.heroImg}
          src={getImageUrl("hero/main.jpg")}
          alt="hero image"
        />
      </div>
      {/* <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div> */}
    </section>
  );
};

export default Hero;
