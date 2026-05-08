import styles from "./HeavyIndustrialRobotPart.module.css";
import heavyIndustrialRobotTransparent from "./../../../assets/HeavyIndustrialRobotTransparent.png";
import { useRef } from "react";
import TextWithAnimation from "../../../compoentns/animated/TextWithAnimation/TextWithAnimation.tsx";
import ImageWithMovingAnimation
  from "../../../compoentns/animated/ImageWithMovingAnimation/ImageWithMovingAnimation.tsx";

function HeavyIndustrialRobotPart() {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={rootRef} className={styles.container}>
      <ImageWithMovingAnimation image={heavyIndustrialRobotTransparent} />
      <TextWithAnimation getParentComponent={() => rootRef.current}>
        Our industrial machines are so heavy they can lift a track.
      </TextWithAnimation>
    </div>
  );
}

export default HeavyIndustrialRobotPart;