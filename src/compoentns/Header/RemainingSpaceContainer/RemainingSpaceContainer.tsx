import styles from "./RemainingSpaceContainer.module.css"
import {useEffect, useRef} from "react";
import {animate, createScope, createTimeline, type Scope} from "animejs";

interface RemainingSpaceContainerProps {
  className?: string
  isExpanded: boolean;
  onClick: (e: React.MouseEvent) => void;
}

function RemainingSpaceContainer(props: RemainingSpaceContainerProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if(!rootRef.current) {
      throw new Error(`Root reference is not available yet.`);
    }
    scopeRef.current = createScope({ root: rootRef.current });
    scopeRef.current.add(self => {
      if(self === undefined) throw new Error(`Scope is not available yet.`);
      self.add('appear', () => {
        if(!rootRef.current) throw new Error(`Root reference is not available yet.`);
        const tm = createTimeline()
        tm.add(rootRef.current, {
          opacity: 1,
          duration: 1000,
          ease: 'inQuad',
        })
      })
      self.add('disappear', () => {
        if(!rootRef.current) throw new Error(`Root reference is not available yet.`);
        animate(rootRef.current, {
          opacity: 0,
          duration: 1000,
          ease: 'inQuad',
        })
      })
    })
  }, []);

  useEffect(() => {
    if (props.isExpanded) {
      scopeRef.current?.methods.appear();
    } else {
      scopeRef.current?.methods.disappear();
    }
  }, [props.isExpanded]);

  return (
    <div
      ref={rootRef}
      className={`${styles.container} ${props.className || ''}`}
      onClick={props.onClick}
    >
      <span className={styles.highlightedText}>Click anywhere to exit menu</span>
    </div>
  );
}

export default RemainingSpaceContainer;