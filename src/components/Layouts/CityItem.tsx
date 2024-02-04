import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/CityItem.module.css";
import { CitiesDataType } from "../../types";
import { formatDate } from "../../utils/utils.ts";

interface OwnProps {
  city: CitiesDataType;
}

type Props = OwnProps;

const CityItem: FunctionComponent<Props> = ({ city }) => {
  const { emoji, cityName, date } = city;
  return (
    <li>
      <Link to={"/app/countries"} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
