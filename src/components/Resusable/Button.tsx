import { FunctionComponent, ReactNode } from "react";
import styles from "../../css/Button.module.css";

interface OwnProps {
  children: ReactNode;
  type: string;
  onClick: (e: any) => void;
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
};

export default Button;
