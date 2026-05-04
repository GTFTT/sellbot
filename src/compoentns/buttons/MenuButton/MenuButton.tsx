import {type ButtonHTMLAttributes} from 'react';
import styles from "./MenuButton.module.css"

export type MenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function MenuButton(props: MenuButtonProps) {
  return (
    <button {...props} className={`${styles.container} ${props.className}`}></button>
  );
}

export default MenuButton;