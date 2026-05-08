import HeavyIndustrialRobotPart from "./HeavyIndustrialRobotPart/HeavyIndustrialRobotPart.tsx";
import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.container}>
      <HeavyIndustrialRobotPart />
    </div>
  );
}

export default Home;