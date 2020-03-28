import { useState, useEffect } from "react";

const useHttp = (url, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  console.log("this is the url", url);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // console.log("url", url);
        let response = await fetch(url);
        let data = await response.json();
        console.log("this is data", data);
        if (data.response !== "error") {
          setData(data.results);
          setLoading(false);
        } else {
          setError(data.response);
        }
        // console.log("error", error);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, params);

  // console.log("is loading from http", isLoading);
  return [data, isLoading, error];
};

export default useHttp;
