"use client";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

// Define props interface for MobileFilter component
interface MobileFilterProps {
    sizes: Size[]; // Array of sizes
    colors: Color[]; // Array of colors
}

const MobileFilter: React.FC<MobileFilterProps> = ({
    sizes,
    colors
}) => {
    // State to manage the open/closed state of the dialog
    const [open, setOpen] = useState(false);
    
    // Functions to open and close the dialog
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return(
        <>
            {/* Button to open the dialog */}
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Plus size={20}/>
            </Button>

            {/* Dialog component */}
            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-25" />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        <div className="flex items-center justify-end px-4">
                            {/* Close button */}
                            <IconButton icon={<X size={15}/>} onClick={onClose}/>
                        </div>
                        <div className="p-4">
                        {/* Filters size and color */}
                        <Filter 
                        valueKey="sizeId"
                        name="Sizes"
                        data={sizes}
                        />
                        <Filter 
                        valueKey="colorId"
                        name="Colors"
                        data={colors}
                        />
                        </div>
                    </DialogPanel>
                </div>
            
            </Dialog>
        </>
    )
}

export default MobileFilter;