import { Size } from "@/types";

// getting the sizes for the store from the api call
const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL);
    return res.json();
};

export default getSizes;