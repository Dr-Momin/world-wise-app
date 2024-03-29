import styles from "../../css/Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <img
        src="/assets/logo.png"
        alt="WorldWise logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
