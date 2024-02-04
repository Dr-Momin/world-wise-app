import { FunctionComponent } from "react";
import useFetch from "../../hooks/useFetch.tsx";
import { CitiesDataType, FetchType } from "../../types";
import { Spinner } from "../index.ts";
import styles from "../../css/CityList.module.css";
import CityItem from "./CityItem.tsx";

const URL_CITIES = "/cities";

const CityList: FunctionComponent = () => {
  const { loading, data, error } = useFetch(URL_CITIES) as FetchType;

  const cities = data as Array<CitiesDataType>;

  if (error) {
    return <h1>{error}</h1>;
  }

  return loading ? (
    <Spinner />
  ) : (
    <ul className={styles.cityList}>
      {cities && cities.map((city) => <CityItem city={city} key={city.id} />)}
    </ul>
  );
};

export default CityList;
