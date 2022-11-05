import  React, { useState, useEffect}  from "react";

const useFetch = (url, setLoading) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {setData(data)
        setLoading(false)});
    }, [url]);
    
    return [data];
};

export default useFetch;