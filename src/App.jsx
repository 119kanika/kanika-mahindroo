import styles from "./App.module.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
