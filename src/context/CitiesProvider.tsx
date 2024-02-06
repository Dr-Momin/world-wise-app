import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetchData } from "../hooks/useFetch.tsx";
import { CitiesDataType, FetchType } from "../types";

const URL_CITIES = "/cities";

interface OwnProps {
  children: ReactNode;
}

type Props = OwnProps;

export interface CitiesContextType {
  loading: boolean;
  error: string;
  cities: Array<CitiesDataType>;
}

const CitiesContext = createContext<CitiesContextType | null>(null);

const CitiesProvider: FunctionComponent<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const {
    loading,
    data: cities,
    error,
  } = useFetchData(URL_CITIES) as FetchType;

  useEffect(() => {
    setIsLoading(loading);
    setIsError(error);
  }, []);

  /*
   * Write Functions Here
   * */
  const value = {
    loading: isLoading,
    error: isError,
    cities,
  };
  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

export const useCities = () => {
  return useContext(CitiesContext);
};

export default CitiesProvider;
