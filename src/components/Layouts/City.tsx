import styles from "../../css/City.module.css";
import { useFetchById } from "../../hooks/useFetch.tsx";
import { useParams } from "react-router-dom";
import { CitiesDataType } from "../../types";
import { Spinner } from "../index.ts";
import { formatDate } from "../../utils/utils.ts";
import BackButton from "../Resusable/BackButton.tsx";

const URL_CITIES = "/cities";

function City() {
  const { id } = useParams();
  const { loading, data, error } = useFetchById(`${URL_CITIES}/${id}`);

  if (loading) return <Spinner />;

  if (error) return <h1>{error}</h1>;

  let currentCity = data as CitiesDataType;

  return (
    currentCity && (
      <div className={styles.city}>
        <div className={styles.row}>
          <h6>City name</h6>
          <h3>
            <span>{currentCity?.emoji}</span> {currentCity?.cityName}
          </h3>
        </div>

        {currentCity?.date && (
          <div className={styles.row}>
            <h6>You went to {currentCity?.cityName} on</h6>
            <p>{formatDate(currentCity?.date)}</p>
          </div>
        )}

        {currentCity?.notes && (
          <div className={styles.row}>
            <h6>Your notes</h6>
            <p>{currentCity.notes}</p>
          </div>
        )}

        <div className={styles.row}>
          <h6>Learn more</h6>
          <a
            href={`https://en.wikipedia.org/wiki/${currentCity?.cityName}`}
            target="_blank"
            rel="noreferrer"
          >
            Check out {currentCity?.cityName} on Wikipedia &rarr;
          </a>
        </div>

        <div>
          <BackButton> Back</BackButton>
        </div>
      </div>
    )
  );
}

export default City;
