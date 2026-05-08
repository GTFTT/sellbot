import styles from "./ImageWithMovingAnimation.module.css";
import { useEffect, useRef } from "react";
import { createAnimatable } from "animejs";

export interface ImageWithMovingAnimationPropsI {
  image: string
}

function ImageWithMovingAnimation({ image }: ImageWithMovingAnimationPropsI) {
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
      x: 10_000,
      y: 10_000,
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
      const radius = hw / 8;

      // Clamp point to circle
      const distance = Math.hypot(dx, dy);
      const scale = distance > radius ? radius / distance : 1;

      const x = dx * scale;
      const y = dy * scale;

      animatableImage.x(x);
      animatableImage.y(y);
    };

    const resetPosition = () => {
      animatableImage.x(0);
      animatableImage.y(0);
    }

    boundsEl.addEventListener("mousemove", onMouseMove);
    boundsEl.addEventListener("mouseleave", resetPosition);
    window.addEventListener("blur", resetPosition);
    window.addEventListener("resize", refreshBounds);
    window.addEventListener("scroll", refreshBounds, { passive: true });

    return () => {
      boundsEl.removeEventListener("mousemove", onMouseMove);
      boundsEl.removeEventListener("mouseleave", resetPosition);
      window.removeEventListener("blur", resetPosition);
      window.removeEventListener("resize", refreshBounds);
      window.removeEventListener("scroll", refreshBounds);
    };
  }, []);



  return (
    <div ref={boundsRef} className={styles.container}>
      <img ref={imageRef} src={image} alt="HeavyIndustrialRobot" />
    </div>
  );
}

export default ImageWithMovingAnimation;