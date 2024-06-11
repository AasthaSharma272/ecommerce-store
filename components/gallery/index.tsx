"use client";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

// interface for images is image array for product
interface GalleryProps{
    images: ImageType[]
};

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {
    return(
        <TabGroup as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:black lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                    {/* Map over images and render GalleryTab for each */}
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </TabList>
            </div>
            <TabPanels className="aspect-square w-full">
                {/* Map over images and render TabPanel for each */}
                {images.map((image) => (
                    <TabPanel key={image.id}>
                        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                            <Image 
                            fill
                            src={image.url}
                            alt="Image"
                            className="object-cover object-center"
                            />
                        </div>
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    );
}

export default Gallery;