import styles from "./ButtonsContainer.module.css";
import {useEffect, useRef} from "react";
import {animate, createScope, createTimeline, type Scope} from "animejs";
import {mainMenuItems} from "../../../config/menuItems.ts";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock.tsx";

export interface ButtonsContainerProps {
  className?: string;
  isExpanded: boolean;
}

function ButtonsContainer(props: ButtonsContainerProps) {
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
            minHeight: '50vh',
            duration: 1000,
            ease: 'inQuad',
          })
        })
        self.add('disappear', () => {
          if(!rootRef.current) throw new Error(`Root reference is not available yet.`);
          animate(rootRef.current, {
            opacity: 0,
            minHeight: '0vh',
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
    <div ref={rootRef} className={`${styles.buttonsContainer} ${props.className || ''}`}>
      {
        mainMenuItems.map(item => {
          return (
            <ButtonsBlock items={item.items} />
          )
        })
      }
    </div>
  );
}

export default ButtonsContainer;