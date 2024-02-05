import { FunctionComponent } from "react";
import { useFetchData } from "../../hooks/useFetch.tsx";
import { CitiesDataType, FetchType } from "../../types";
import { Spinner } from "../index.ts";
import styles from "../../css/CityList.module.css";
import CityItem from "./CityItem.tsx";
import { v4 as uuidv4 } from "uuid";

const URL_CITIES = "/cities";

const CityList: FunctionComponent = () => {
  const { loading, data, error } = useFetchData(URL_CITIES) as FetchType;

  const cities = data as Array<CitiesDataType>;

  if (error) {
    return <h1>{error}</h1>;
  }

  return loading ? (
    <Spinner />
  ) : (
    <ul className={styles.cityList}>
      {cities && cities.map((city) => <CityItem city={city} key={uuidv4()} />)}
    </ul>
  );
};

export default CityList;
