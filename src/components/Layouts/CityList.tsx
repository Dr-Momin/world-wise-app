import { FunctionComponent } from "react";
import { Spinner } from "../index.ts";
import styles from "../../css/CityList.module.css";
import CityItem from "./CityItem.tsx";
import { v4 as uuidv4 } from "uuid";
import { CitiesContextType, useCities } from "../../context/CitiesProvider.tsx";
const CityList: FunctionComponent = () => {
  const { loading, cities, error } = useCities() as CitiesContextType;

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
