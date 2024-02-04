import { useEffect, useState } from "react";
import { fetchData } from "../api/axios.ts";
import { AxiosError } from "axios";
import { FetchType } from "../types";

const useFetch = (url: string): FetchType => {
  const [data, setData] = useState<Array<unknown> | Record<string, unknown>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetch = async () => {
      try {
        console.log(url);
        setLoading(true);
        const { data } = await fetchData(url);

        if (!data) return null;

        if (data) {
          console.log(data);
          setData(data);
        }
      } catch (err: unknown) {
        const error = err as AxiosError;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return { loading, data, error } as FetchType;
};

export default useFetch;
