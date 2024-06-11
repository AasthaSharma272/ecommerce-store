"use client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
    // State to track component mounting status
    const [isMounted, setIsMounted] = useState(false);
    
    // useEffect to set isMounted to true after component mount
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();

    // useCart hook to get cart data
    const cart = useCart();
     
    // Render nothing if component is not mounted yet
    if (!isMounted){
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4"> {/* Container for navigation actions */}
            {/* Button for navigating to cart */}
            <Button className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag 
                size={20}
                color="white"
                onClick={() => {router.push("/cart")}}
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length} {/* Number of items in the cart */}
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions;