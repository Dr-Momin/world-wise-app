import { FunctionComponent } from "react";
import Logo from "../Resusable/Logo.tsx";
import styles from "../../css/Sidebar.module.css";
import { AppNav, Footer } from "../index.ts";
import { Outlet } from "react-router-dom";

const Sidebar: FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Sidebar;
