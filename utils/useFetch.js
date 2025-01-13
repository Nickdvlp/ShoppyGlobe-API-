import { useEffect, useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const CallApi = await fetch("https://dummyjson.com/products");
        const res = await CallApi.json();
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return { data, error, isLoading };
}

export default useFetch;
