import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetchById, useFetchData } from "../hooks/useFetch.tsx";
import {
  CitiesDataType,
  CitiesFetchType,
  CurrentCityFetchType,
  FetchType,
} from "../types";
import { fetchData } from "../api/axios.ts";

const URL_CITIES = "/cities";

interface OwnProps {
  children: ReactNode;
}

type Props = OwnProps;

export interface CitiesContextType {
  loading: boolean;
  error: string;
  cities: CitiesDataType[];
  getCurrentCity: (id: number) => Promise<void>;
  currentCity: CitiesDataType;
}

const CitiesContext = createContext<CitiesContextType | null>(null);

const CitiesProvider: FunctionComponent<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [currentCity, setCurrentCity] = useState({});

  const {
    loading,
    data: cities,
    error,
  } = useFetchData(URL_CITIES) as CitiesFetchType;

  useEffect(() => {
    setIsLoading(loading);
    setIsError(error);
  }, []);

  const getCurrentCity = async (id: number) => {
    setIsLoading(true);
    try {
      const { data } = await fetchData(`${URL_CITIES}/${id}`);
      if (data) setCurrentCity(data);
    } catch (error: unknown) {
      // @ts-ignore
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  /*
   * Write Functions Here
   * */
  const value = {
    loading: isLoading,
    error: isError,
    cities,
    getCurrentCity,
    currentCity,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

export const useCities = () => {
  return useContext(CitiesContext);
};

export default CitiesProvider;
