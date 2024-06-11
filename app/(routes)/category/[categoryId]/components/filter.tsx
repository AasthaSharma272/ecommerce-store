"use client";

import { Color, Size } from "@/types";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Interface defining props for Filter component
interface FilterProps {
    data: (Size | Color)[]; // Array of sizes or colors
    name: string; // Name of the filter (e.g., Sizes or Colors)
    valueKey: string; // Key for accessing the filter value in URL query params
}

const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    const searchParams = useSearchParams(); // Hook for accessing search params
    const router = useRouter(); // Next.js router

    const selectedValue = searchParams.get(valueKey); // Get the currently selected filter value from URL query params

    // Function to handle filter option click
    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString()); // Parse current URL query params

        const query = {
            ...current,
            [valueKey]: id
        };

        // If the current filter value is the same as the clicked value, remove the filter
        if(current[valueKey] === id){
            query[valueKey] = null
        }

        // Stringify the query params and construct the new URL
        const url = qs.stringifyUrl({
            url: window.location.href,// Get current URL
            query // Updated query params
        }, { skipNull: true }); // Skip null values in query params

        // Push the new URL to the router
        router.push(url);
    }
    return(
        <div className="mb-8">
            <h3 className="text-lg font-semibold">
                {name} {/* Display the name of the filter */}
            </h3>
            <hr className="my-4"/>
            <div className="flex flex-wrap gap-2">
                {/* Map over filter data and render filter options */}
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        {/* Render button for each filter option */}
                        <Button
                        className={cn(
                            "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                            selectedValue === filter.id && "bg-black text-white"
                        )}
                        onClick={() => onClick(filter.id)}
                        >
                            {filter.name} {/* Display filter option name */}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter;