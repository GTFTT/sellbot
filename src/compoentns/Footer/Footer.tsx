import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.container}>
      All rights protected. We keep this world productive and safe for more than 20 years now 2004-{(new Date().getFullYear())}.
    </div>
  );
}

export default Footer;