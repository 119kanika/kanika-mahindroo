import styles from "./App.module.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
};

export default App;
