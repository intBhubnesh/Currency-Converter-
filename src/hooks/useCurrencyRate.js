import { useEffect, useState } from "react";

function useCurrencyRate(currency){
    const [rate, setRate] = useState({})
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((res) => setRate(res[currency]))
    }, [currency] )

    return rate;
}

export default useCurrencyRate;
