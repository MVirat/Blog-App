import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abotCont = new AbortController();

        fetch(url , {signal : abotCont.signal})
          .then(res => {
            if(!res.ok){
              throw Error('Canot fetch');
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          }).catch(err => {
              if(err.name === 'AbortError'){
                  console.log('Fech Aborted');
              }
              else{
            setIsPending(false);
            setError(err.message);
            }
              })
              return () => abotCont.abort(); 
      }, [url])

    

      return {data , isPending , error}
}

export default useFetch;
