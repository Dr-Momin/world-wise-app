import { FunctionComponent } from "react";
import styles from "../css/AppLayout.module.css";
import Sidebar from "../components/Sections/Sidebar.tsx";
import Map from "../components/Layouts/Map.tsx";

interface OwnProps {}

type Props = OwnProps;

const AppLayout: FunctionComponent<Props> = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
