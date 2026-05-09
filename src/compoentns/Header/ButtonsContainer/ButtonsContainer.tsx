import styles from "./ButtonsContainer.module.css";
import {useEffect, useRef} from "react";
import {animate, createScope, createTimeline, type Scope} from "animejs";
import {type MainMenuItemBlockItem, mainMenuItems} from "../../../config/menuItems.ts";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock.tsx";

export interface ButtonsContainerProps {
  className?: string;
  isExpanded: boolean;
  onMenuItemClick?: (item: MainMenuItemBlockItem) => void;
}

function ButtonsContainer({className, isExpanded, onMenuItemClick}: ButtonsContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
      if(!containerRef.current) {
        throw new Error(`Root reference is not available yet.`);
      }
      scopeRef.current = createScope({ root: containerRef.current });
      scopeRef.current.add(self => {
        if(self === undefined) throw new Error(`Scope is not available yet.`);
        self.add('appear', () => {
          if(!containerRef.current) throw new Error(`Root reference is not available yet.`);

          // Setting initial state
          containerRef.current.style.opacity = '0';

          const tm = createTimeline()
          tm.add(containerRef.current, {
            opacity: 1,
            duration: 1000,
            ease: 'inQuad',
          })
        })
        self.add('disappear', () => {
          if(!containerRef.current) throw new Error(`Root reference is not available yet.`);
          animate(containerRef.current, {
            opacity: 0,
            duration: 1000,
            ease: 'inQuad',
          })
        })
      })
  }, []);

  useEffect(() => {
    if (isExpanded) {
      scopeRef.current?.methods.appear();
    } else {
      scopeRef.current?.methods.disappear();
    }
  }, [isExpanded]);

  return (
    <div ref={containerRef} className={`${styles.buttonsContainer} ${className || ''}`}>
      {
        mainMenuItems.map(item => {
          return (
            <ButtonsBlock key={item.id} items={item.items} onButtonClick={onMenuItemClick} blockVisible={isExpanded} />
          )
        })
      }
    </div>
  );
}

export default ButtonsContainer;