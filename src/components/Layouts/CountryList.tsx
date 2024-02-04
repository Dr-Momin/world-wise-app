import { FunctionComponent } from "react";
import useFetch from "../../hooks/useFetch.tsx";
import { CitiesDataType, FetchType } from "../../types";
import { CountryItem, Spinner } from "../index.ts";
import styles from "../../css/CountryList.module.css";

const URL_CITIES = "/cities";

const CountryList: FunctionComponent = () => {
  const { loading, data, error } = useFetch(URL_CITIES) as FetchType;

  const cities = data as Array<CitiesDataType>;

  if (error) {
    return <h1>{error}</h1>;
  }

  return loading ? (
    <Spinner />
  ) : (
    <ul className={styles.countryList}>
      {cities &&
        cities.map((city) => <CountryItem country={city} key={city.id} />)}
    </ul>
  );
};

export default CountryList;
