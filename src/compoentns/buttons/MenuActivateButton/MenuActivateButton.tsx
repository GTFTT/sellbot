import {type ButtonHTMLAttributes} from 'react';
import styles from "./MenuActivateButton.module.css";
import logo from "../../../assets/logo.png"

function MenuActivateButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`${styles.menuActivateButton} ${props.className || ''}`}
    >
      <span className={styles.logoContainer}><img className={styles.logo} src={logo} alt={"logo"}/></span>
      <span>MENU</span>
    </button>
  );
}

export default MenuActivateButton;