"use client";

import PreviewModal from "@/components/ui/preview-modal"
import { useEffect, useState } from "react";

// ModalProvider functional component
const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false); // State to track if the component is mounted

    // Effect to set isMounted to true when the component is mounted
    useEffect(() => {
        setIsMounted(true);
    }, [])

    // Render null if the component is not mounted yet
    if(!isMounted){
        return null;
    }

    // Render the PreviewModal component if the component is mounted
    return (
        <>
            <PreviewModal />
        </>
    );
}

export default ModalProvider;