import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.container}>
      All rights are protected {(new Date().getFullYear())}
    </div>
  );
}

export default Footer;