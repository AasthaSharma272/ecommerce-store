"use client"

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import { useEffect, useState } from "react";

// CartPage component definition
const CartPage = () => {
    // State to track if the component is mounted
    const [isMounted, setIsMounted] = useState(false);
    // Custom hook to access the shopping cart data
    const cart = useCart();

    // when mounted, set is mounted to true
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // prevent hydration errors
    if(!isMounted){
        return null;
    }


    return (
        <div className="bg-white">
            {/* Container for page content */}
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                    {/* Grid layout for cart items and summary */}
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {/* Display message if cart is empty */}
                            {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart</p>}
                            <ul>
                                {/* Render each cart item in unordered list */}
                                {cart.items.map((item) => (
                                    <CartItem 
                                    key={item.id}
                                    data={item}
                                    />
                                ))}
                            </ul>
                        </div>
                        {/* Summary section */}
                        <Summary />
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default CartPage;