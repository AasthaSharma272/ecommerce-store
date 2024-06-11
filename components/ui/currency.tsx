"use client";

import { useEffect, useState } from "react";

// Creating a formatter for currency values
export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

// Props interface for the Currency component
interface CurrencyProps{
    value?: string | number;
}

// Currency component definition
const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    // State to track if the component is mounted
    const [isMounted, setIsMounted] = useState(false);

    // Effect to set isMounted to true after component mounts
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    // Return a div with formatted currency value
    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency;