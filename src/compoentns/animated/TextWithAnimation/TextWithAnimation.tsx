import styles from "./TextWithAnimation.module.css"
import { useEffect, useRef} from "react";
import {createAnimatable} from "animejs";

export interface TextWithAnimationPropsI {
  className?: string;
  children?: React.ReactNode;
  getParentComponent: () => HTMLElement | null;
}

/**
 * This is a simple text component with reusable animation. Animation is moving to the center of the screen and then stopping
 */
function TextWithAnimation({className, children, getParentComponent}: TextWithAnimationPropsI) {
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    // Keep breakpoint aligned with your CSS media query
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Disable animation on mobile and ensure default position
    if (isMobile) {
      textEl.style.transform = "translateY(0)";
      return;
    }

    let rafId = 0;

    const animatableText = createAnimatable(textEl, {
      y: 200,
      ease: "linear",
    });

    const update = () => {
      const rootEl = getParentComponent();
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
  }, [getParentComponent]);

  return (
    <span ref={textRef} className={`${styles.container} ${className || " "}`}>{children}</span>
  );
}

export default TextWithAnimation;