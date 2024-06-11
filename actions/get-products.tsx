import { Product } from "@/types";
import qs from "query-string";

// Constructing the URL for fetching products from the API
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// Interface for defining query parameters
interface Query {
    categoryId?: string,
    colorId?: string,
    sizeId?: string,
    isFeatured?: boolean
}

// Function to fetch products based on provided query parameters
const getProducts = async (query: Query): Promise<Product[]> => {
    // Constructing the URL with query parameters using query-string library
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(url);
    // Parsing the JSON response and returning the products
    return res.json();
};

export default getProducts;