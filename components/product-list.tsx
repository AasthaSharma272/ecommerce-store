import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

// Define props interface for ProductList component
interface ProductListProps {
    title: string,
    items: Product[]
}

// ProductList functional component
const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {/* Display NoResults component if items array is empty */}
            {items.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Map through items array and render ProductCard for each item */}
                {items.map((item) => (
                    <ProductCard key={item.id} data={item}/>
                ))}
            </div>
        </div>
    );
}

export default ProductList;