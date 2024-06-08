import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <p>Created with ❤️ by Kanika.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contacts/email.png")} alt="email icon" />
          <a href="mailto:kanika.mahindroo@gmail.com">
            kanika.mahindroo@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contacts/github.png")} alt="github icon" />
          <a href="https://www.linkedin.com/in/kanika-mahindroo-47221817a/">
            linkedin.com/in/kanika-mahindroo
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contacts/linkedin.png")} alt="linkedin icon" />
          <a href="https://github.com/119kanika">
            https://github.com/119kanika
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
