import HeavyIndustrialRobotPart from "./HeavyIndustrialRobotPart/HeavyIndustrialRobotPart.tsx";
import styles from "./Home.module.css"
import HousekeepingRobotPart from "./HousekeepingRobotPart/HousekeepingRobotPart.tsx";

function Home() {
  return (
    <div className={styles.container}>
      <HeavyIndustrialRobotPart />
      <HousekeepingRobotPart />
    </div>
  );
}

export default Home;