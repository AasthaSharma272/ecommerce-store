import { Product } from "@/types";
import { create } from "zustand";

// Interface defining the shape of the PreviewModalStore
interface PreviewModalStore {
    isOpen: boolean; // Indicates whether the modal is open
    data?: Product; // Data of the product being previewed
    onOpen: (data: Product) => void; // Function to open the modal with product data
    onClose: () => void; // Function to close the modal
}

// Create the usePreviewModal store using Zustand
const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false, // initialze modal as closed
    data: undefined, // Initialize data as undefined
    // Function to open the modal with product data
    onOpen: (data: Product) => set({ data: data, isOpen: true }),
    // Function to close the modal
    onClose: () => set({ isOpen: false })
}));

export default usePreviewModal;