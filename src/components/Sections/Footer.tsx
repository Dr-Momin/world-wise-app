import { FunctionComponent } from "react";
import styles from "../../css/Sidebar.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Made by Momin Khan - {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
