import styles from "./ButtonsBlock.module.css"
import type {MainMenuItemBlockItem} from "../../../../config/menuItems.ts";
import MenuButton from "../../../buttons/MenuButton/MenuButton.tsx";

export interface ButtonsBlockProps {
  className?: string;
  items: MainMenuItemBlockItem[];
}

function ButtonsBlock(props: ButtonsBlockProps) {
  return (
    <div className={`${styles.container} ${props.className || ''}`}>
      {
        props.items.map(item => {
          return (
            <MenuButton key={item.id} >{item.label}</MenuButton>
          )
        })
      }
    </div>
  );
}

export default ButtonsBlock;