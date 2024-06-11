import { Category } from "@/types";

// getting the specific category for the store from the api call
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
};

export default getCategory;