import { Product } from "@/types";

// getting the products for the store from the api call
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
};

export default getProduct;