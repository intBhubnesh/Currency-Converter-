import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
            .then((res) => res.json())
            .then((res) => {
                setData(Object.entries(res));  // Set the response directly to retain currency codes as keys
            })
            .catch((error) => console.error("Error fetching currency data:", error));
    }, []);

    return data;
}

export default useCurrencyInfo;
