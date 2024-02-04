import { FunctionComponent } from "react";
import styles from "../../css/PageNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Resusable/Logo.tsx";

const Navbar: FunctionComponent = () => {
  const navItems = [
    {
      id: 1,
      path: "Home",
      link: "/",
    },
    {
      id: 2,
      path: "Product",
      link: "/product",
    },
    {
      id: 3,
      path: "Pricing",
      link: "/pricing",
    },
    {
      id: 4,
      path: "Login",
      link: "/login",
    },
  ];

  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              className={`${item.path === "Login" ? styles.ctaLink : ""}`}
            >
              {item.path}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
