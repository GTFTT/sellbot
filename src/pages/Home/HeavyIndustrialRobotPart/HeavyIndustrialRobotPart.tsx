import styles from "./HeavyIndustrialRobotPart.module.css";
import heavyIndustrialRobotTransparent from "./../../../assets/HeavyIndustrialRobotTransparent.png";
import { useEffect, useRef } from "react";
import { createAnimatable } from "animejs";

function HeavyIndustrialRobotPart() {
  const rootRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const boundsEl = boundsRef.current;
    const imageEl = imageRef.current;
    if (!boundsEl || !imageEl) return;

    let bounds = boundsEl.getBoundingClientRect();
    const refreshBounds = () => {
      bounds = boundsEl.getBoundingClientRect();
    };

    const animatableImage = createAnimatable(imageEl, {
      x: 5000,
      y: 5000,
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
      const radius = hw / 10;

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

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    let rafId = 0;

    const animatableText = createAnimatable(textEl, {
      y: 50,
      ease: "linear",
    });

    const update = () => {
      const rootEl = rootRef.current;
      if (!rootEl) return;

      // Measure text in base position to avoid transform feedback
      animatableText.y(0);

      const textRect = textEl.getBoundingClientRect();
      const rootRect = rootEl.getBoundingClientRect();

      const viewportCenterY = window.innerHeight / 2;
      const textCenterY = textRect.top + textRect.height / 2;

      // Movement needed to center text
      const deltaToCenter = viewportCenterY - textCenterY;

      // Max down shift so text never goes below component bottom
      // (bottom lock position)
      const maxDown =
        rootRect.bottom - (textRect.top + textRect.height);

      // Optional up clamp if you don't want it to move too high
      const maxUp = -300;

      // Effect active only while viewport center is within component bounds
      const isInsideComponent =
        viewportCenterY >= rootRect.top && viewportCenterY <= rootRect.bottom;

      let y;

      if (isInsideComponent) {
        // Follow center while inside
        y = deltaToCenter;
      } else if (viewportCenterY > rootRect.bottom) {
        // Scrolled past component: lock at bottom
        y = maxDown;
      } else {
        // Before component: keep original
        y = 0;
      }

      // Final safety clamp
      y = Math.max(maxUp, Math.min(maxDown, y));

      animatableText.y(y);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.container}>
      <div ref={boundsRef} className={styles.imageBounds}>
        <img ref={imageRef} src={heavyIndustrialRobotTransparent} alt="HeavyIndustrialRobot" />
      </div>
      <span ref={textRef} className={styles.text}>
        Our industrial machines are so heavy they can lift a track.
      </span>
    </div>
  );
}

export default HeavyIndustrialRobotPart;