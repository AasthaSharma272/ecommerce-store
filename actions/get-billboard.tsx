import { Billboard } from "@/types";

// getting the billboards for the store from the api call
const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
};

export default getBillboard;