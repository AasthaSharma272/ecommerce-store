"use client";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

// Summary component definition
const Summary = () => {
    // Hook for accessing URL search parameters
    const searchParams = useSearchParams();
    // Accessing items from the shopping cart state
    const items = useCart((state) => state.items);
    // Function to remove all items from the cart
    const removeAll = useCart((state) => state.removeAll);

    // Effect to handle payment success or cancellation
    useEffect(() => {
        if(searchParams.get("success")){
            toast.success("Payment completed.");
            removeAll(); // remove all items from cart
        }
        // Display error toast notification
        if(searchParams.get("canceled")){
            toast.error("Something went wrong.")
        }
    }, [searchParams, removeAll])

    // Calculate total price of all items in the cart
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price); // Accumulate total price
    }, 0);

    // Function to handle checkout action
    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id) // Send product IDs to the backend for checkout
        });

        window.location = response.data.url; // Redirect to checkout URL received from the backend
    }

    return(
        <div
        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            {/* Displaying the summary title */}
            <h2 className="text-lg font-medium text-gray-900">
                Order Summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order total
                    </div>
                    {/* Displaying the total price */}
                    <Currency value={totalPrice} />
                </div>
            </div>
            {/* checout button, redirects to stripe checkout */}
            <Button disabled={items.length === 0} onClick={onCheckout} className="w-full mt-6">
                Checkout
            </Button>
        </div>
    )
}

export default Summary;