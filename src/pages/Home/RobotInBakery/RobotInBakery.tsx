import styles from "./RobotInBakery.module.css";
import robotInBakery from "./../../../assets/RobotInBakery.png";
import { useRef } from "react";
import TextWithAnimation from "../../../compoentns/animated/TextWithAnimation/TextWithAnimation.tsx";
import ImageWithMovingAnimation
  from "../../../compoentns/animated/ImageWithMovingAnimation/ImageWithMovingAnimation.tsx";

function RobotInBakery() {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={rootRef} className={styles.container}>
      <ImageWithMovingAnimation image={robotInBakery} />
      <TextWithAnimation getParentComponent={() => rootRef.current}>
        Our robots can do any work, anywhere, anytime.
      </TextWithAnimation>
    </div>
  );
}

export default RobotInBakery;