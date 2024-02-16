import { FunctionComponent } from "react";
import { useFetchData } from "../../hooks/useFetch.tsx";
import { CitiesDataType, FetchType } from "../../types";
import { CountryItem, Message, Spinner } from "../index.ts";
import styles from "../../css/CountryList.module.css";
import { v4 as uuidv4 } from "uuid";

const URL_CITIES = "/cities";

const CountryList: FunctionComponent = () => {
  const { loading, data, error } = useFetchData(URL_CITIES) as FetchType;

  const cities = data as Array<CitiesDataType>;

  if (loading) return <Spinner />;

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!cities?.length)
    return <Message message={"Add your first city on map"} />;

  // Removing Duplicate Countries from Cities Array
  // @ts-ignore
  const countries: [] = cities?.reduce((arr, city) => {
    // @ts-ignore
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries &&
        countries.map((country) => (
          <CountryItem country={country} key={uuidv4()} />
        ))}
    </ul>
  );
};

export default CountryList;
