import styles from "./HeavyIndustrialRobotPart.module.css";
import heavyIndustrialRobotTransparent from "./../../../assets/HeavyIndustrialRobotTransparent.png";
import { useEffect, useRef } from "react";
import { createAnimatable } from "animejs";

function HeavyIndustrialRobotPart() {
  const rootRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const boundsEl = boundsRef.current;
    const imageEl = imageRef.current;
    if (!boundsEl || !imageEl) return;

    let bounds = boundsEl.getBoundingClientRect();
    const refreshBounds = () => {
      bounds = boundsEl.getBoundingClientRect();
    };

    const animatableImage = createAnimatable(imageEl, {
      x: 1000,
      y: 1000,
      ease: "out(3)",
    });

    const onMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } = bounds;
      const hw = width / 2;
      const hh = height / 2;

      // Mouse position relative to center
      const dx = e.clientX - left - hw;
      const dy = e.clientY - top - hh;

      // Circular bound radius: 1/10 of half-width
      const radius = hw / 5;

      // Clamp point to circle
      const distance = Math.hypot(dx, dy);
      const scale = distance > radius ? radius / distance : 1;

      const x = dx * scale;
      const y = dy * scale;

      animatableImage.x(x);
      animatableImage.y(y);
    };

    boundsEl.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", refreshBounds);
    window.addEventListener("scroll", refreshBounds, { passive: true });

    return () => {
      boundsEl.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", refreshBounds);
      window.removeEventListener("scroll", refreshBounds);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.container}>
      <div ref={boundsRef} className={styles.imageBounds}>
        <img ref={imageRef} src={heavyIndustrialRobotTransparent} alt="HeavyIndustrialRobot" />
      </div>
      <span className={styles.text}>Our industrial machines are so heavy they can lift a track.</span>
    </div>
  );
}

export default HeavyIndustrialRobotPart;