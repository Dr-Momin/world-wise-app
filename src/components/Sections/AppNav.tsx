import { FunctionComponent } from "react";
import styles from "../../css/AppNav.module.css";
import { NavLink } from "react-router-dom";

const AppNav: FunctionComponent = () => {
  return (
    <div className={styles.nav}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="cities">Cities</NavLink>
          </li>
          <li>
            <NavLink to="countries">Countries</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppNav;
