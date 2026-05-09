import styles from "./ButtonsBlock.module.css"
import type {MainMenuItemBlockItem} from "../../../../config/menuItems.ts";
import MenuButton from "../../../buttons/MenuButton/MenuButton.tsx";
import {useNavigate} from "react-router";
import {useEffect, useRef} from "react";
import { createScope, createTimeline, type Scope} from "animejs";

export interface ButtonsBlockProps {
  className?: string;
  items: MainMenuItemBlockItem[];
  onButtonClick?: (item: MainMenuItemBlockItem) => void;
  blockVisible: boolean;
}

function ButtonsBlock({className, items, onButtonClick, blockVisible}: ButtonsBlockProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scopeRef = useRef<Scope | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current) throw new Error(`containerRef is not available.`);

    scopeRef.current = createScope({ root: containerRef.current });

    scopeRef.current.add(self => {
      if (self === undefined) throw new Error(`Scope is not available.`);

      self.add('appear', () => {
        if (!containerRef.current) throw new Error(`containerRef is not available.`);

        const buttons = Array.from(containerRef.current.children) as HTMLElement[];

        // Set initial state BEFORE animating
        buttons.forEach(btn => {
          (btn as HTMLElement).style.opacity = '0';
          (btn as HTMLElement).style.transform = 'translateY(-60px)';
        });

        const tm = createTimeline();

        tm.add(containerRef.current, {
          opacity: 1,
          duration: 100,
          ease: 'linear',
        });

        tm.add(buttons, {
          translateY: ['-60px', '0px'],
          opacity: [0, 1],
          duration: 600,
          delay: (_: any, index: number) => index * 120,
          ease: 'outQuad',
        });
      });

      self.add('disappear', () => {
        if (!containerRef.current) throw new Error(`containerRef is not available.`);

        const buttons = Array.from(containerRef.current.children);

        const tm = createTimeline();

        tm.add(buttons, {
          translateY: ['0px', '-60px'],
          opacity: [1, 0],
          duration: 500,
          delay: (_: any, index: number) => index * 60,
          ease: 'inQuad',
        });

        tm.add(containerRef.current, {
          height: '0',
          duration: 500,
          ease: 'inQuad',
        });

        tm.add(containerRef.current, {
          opacity: 0,
          duration: 100,
          ease: 'linear',
        });
      });
    });
  }, []);

  useEffect(() => {
    if (blockVisible) {
      scopeRef.current?.methods.appear();
    } else {
      scopeRef.current?.methods.disappear();
    }
  }, [blockVisible, scopeRef]);

  return (
    <div ref={containerRef} className={`${styles.container} ${className || ''}`}>
      {
        items.map(item => {
          return (
            <MenuButton
              key={item.id}
              onClick={() => {
                if(item.route === undefined) {
                  throw new Error(`Route is not defined for menu item with id ${item.id}`);
                } else {
                  navigate(item.route);
                }
                onButtonClick?.(item);
              }}
            >
              {item.label}
            </MenuButton>
          )
        })
      }
    </div>
  );
}

export default ButtonsBlock;