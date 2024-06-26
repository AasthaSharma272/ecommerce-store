"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import {  X } from "lucide-react";
import Image from "next/image";

// Props interface for CartItem component
interface CartItemProps{
    data: Product;
}

// CartItem component definition
const CartItem: React.FC<CartItemProps> = ({
    data
}) => {
    // custom hook to accept cart components
    const cart = useCart();

    // Event handler for removing the item from the cart
    const onRemove = () => {
        cart.removeItem(data.id); // Remove the item from the cart by its ID
    }

    // Rendering logic for the CartItem component
    return (
        <li className="flex py-6 border-b">  {/* listing items */}
             {/* Product image */}
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image fill src={data.images[0].url} alt="" className="object-cover object-center"/>
            </div>
            {/* Product details */}
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                {/* Remove button */}
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15}/>}/>
                </div>
                {/* Product information */}
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    {/* Product name */}
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">{data.name}</p>
                    </div>
                    {/* Product attributes (color and size) */}
                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{data.color.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
                    </div>
                    {/* Product price formatted as currency */}
                    <Currency value={data.price}/>
                </div>
            </div>
        </li>
    );
}

export default CartItem;