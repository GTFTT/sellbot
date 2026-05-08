import styles from "./HousekeepingRobotPart.module.css";
import robotHousekeeper from "./../../../assets/RobotHousekeeper.png";
import { useRef } from "react";
import TextWithAnimation from "../../../compoentns/animated/TextWithAnimation/TextWithAnimation.tsx";
import ImageWithMovingAnimation
  from "../../../compoentns/animated/ImageWithMovingAnimation/ImageWithMovingAnimation.tsx";

function HousekeepingRobotPart() {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={rootRef} className={styles.container}>
      <ImageWithMovingAnimation image={robotHousekeeper} />
      <TextWithAnimation getParentComponent={() => rootRef.current}>
        Our home keeping machines can work autonomously and serve all your needs before you ask.
      </TextWithAnimation>
    </div>
  );
}

export default HousekeepingRobotPart;