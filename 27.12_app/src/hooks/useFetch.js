import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [err, setErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(getAll,[]);
    function getAll(){
        setIsLoading(true)
        fetch(url)
        .then((res)=> {
            let dataFetch = res.status == 200 ? res.json(): "error";
            return dataFetch;
        })
        .then((data) => {
            console.log(data);
            setTimeout(()=>{
                if(data === "error")return setErr(true);
                setData(data.data.children);
            },3000);
        })
        .catch((err) => {
            setTimeout(()=>{
                setErr(err);
            },3000);
        })
        .finally(()=>{
            setTimeout(()=>{
                setIsLoading(false);
            },3000);
        });
    }
    return [data ,isLoading, err]
};
