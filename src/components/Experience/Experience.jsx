import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.history}>
        {history.map((historyItem, id) => {
          return (
            <div className={styles.historyItem} key={id}>
              <div className={styles.experience}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation}`}
                />
                <div className={styles.historyDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                </div>
              </div>
              <div className={styles.description}>
                <ul className={styles.list}>
                  {historyItem.experiences.map((exp, id) => {
                    return <li key={id}>{exp}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
