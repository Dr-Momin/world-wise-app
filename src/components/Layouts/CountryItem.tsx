import styles from "../../css/CountryItem.module.css";

function CountryItem({ country }: Record<string, any>) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
