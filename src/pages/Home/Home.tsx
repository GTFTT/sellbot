import HeavyIndustrialRobotPart from "./HeavyIndustrialRobotPart/HeavyIndustrialRobotPart.tsx";
import styles from "./Home.module.css"
import HousekeepingRobotPart from "./HousekeepingRobotPart/HousekeepingRobotPart.tsx";
import RobotInBakery from "./RobotInBakery/RobotInBakery.tsx";
import ProcessorPart from "./ProcessorPart/ProcessorPart.tsx";

function Home() {
  return (
    <div className={styles.container}>
      <ProcessorPart />
      <HeavyIndustrialRobotPart />
      <HousekeepingRobotPart />
      <RobotInBakery />
    </div>
  );
}

export default Home;