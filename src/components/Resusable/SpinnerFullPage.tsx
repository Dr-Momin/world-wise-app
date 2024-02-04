import Spinner from "./Spinner.tsx";
import styles from "../../css/SpinnerFullPage.module.css";

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullpage}>
      <Spinner />
    </div>
  );
}

export default SpinnerFullPage;
