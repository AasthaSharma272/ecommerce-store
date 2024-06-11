"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "@/components/ui/modal";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

const PreviewModal = () => {
    const previewModal = usePreviewModal(); // Hook for managing preview modal state
    const product = usePreviewModal((state) => state.data); // Get product data from modal state
    
    // If product data is not available, return null (don't render anything)
    if (!product) {
        return null;
    }

    // Render the modal with product details
    return (
        <Modal
        open={previewModal.isOpen}
        onClose={previewModal.onClose}
        >
            {/* Grid layout for modal content */}
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    {/* Column for image gallery */}
                    <Gallery images={product.images}/>
                </div>
                {/* Column for additional product information */}
                <div className="sm:col-span-8 lg:col-span-7">
                    <Info data={product}/>
                </div>
            </div>
        </Modal>
    )
}

export default PreviewModal