import { useState, useEffect}  from "react";

const useFetch = (url, setLoading) => {
    const [data, setData] = useState(null);
  
    useEffect((setLoading) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)});
    }, [url]);
    
    return [data];
};

export default useFetch;