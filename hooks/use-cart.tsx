import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Define the shape of the CartStore
interface CartStore {
    items: Product[],
    addItem: (data: Product) => void,
    removeItem: (id: string) => void,
    removeAll: () => void;
}

// Create the useCart hook with Zustand
const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [], // Initialize items array
        // Function to add an item to the cart
        addItem: (data: Product) => {
            const currentItems = get().items; // Get current items in the car
            const existingItem = currentItems.find((item) => item.id === data.id); // check of item already in cart, if yes return message

            if(existingItem){
                return toast("Item already in cart.");
            }
            // If item doesn't exist, add it to the cart and show success notification
            set({ items: [...get().items, data] });
            toast.success("Item added to cart.");
        },
        // Function to remove an item from the cart
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Item removed from cart.")
        },
        // Function to remove all items from the cart
        removeAll: () => set({ items: [] }),
    }), {
        // stored this information in local storage
        name: "cart-storage", // Name of the localStorage key
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;