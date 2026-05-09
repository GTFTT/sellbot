import {type ButtonHTMLAttributes} from 'react';
import styles from "./MenuActivateButton.module.css";

function MenuActivateButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`${styles.menuActivateButton} ${props.className || ''}`}
    >
      <span>MENU</span>
    </button>
  );
}

export default MenuActivateButton;