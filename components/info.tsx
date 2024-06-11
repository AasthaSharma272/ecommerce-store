"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

// Define props interface for Info component
interface InfoProps {
    data: Product; // Product data
}

// Info functional component
const Info: React.FC<InfoProps> = ({
    data
}) => {
    return(
        <div>
            {/* Product name */}
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    {/* Display price using Currency component */}
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            {/* Size and color */}
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>
                        {data?.size?.value}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    {/* Display color as a colored circle */}
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }}/>
                </div>
            </div>
            {/* Add to Cart button */}
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Add to Cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    );
}

export default Info;