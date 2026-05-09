import styles from "./ButtonsBlock.module.css"
import type {MainMenuItemBlockItem} from "../../../../config/menuItems.ts";
import MenuButton from "../../../buttons/MenuButton/MenuButton.tsx";
import {useNavigate} from "react-router";

export interface ButtonsBlockProps {
  className?: string;
  items: MainMenuItemBlockItem[];
  onButtonClick?: (item: MainMenuItemBlockItem) => void;
}

function ButtonsBlock({className, items, onButtonClick}: ButtonsBlockProps) {
  const navigate = useNavigate();
  return (
    <div className={`${styles.container} ${className || ''}`}>
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