import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "./components/mobile-filter";

export const revalidate = 0;

// Interface defining props for CategoryPage component
interface CategoryPageProps{
    params: {
        categoryId: string; // ID of the category
    };
    searchParams: {
        colorId: string; // ID of the selected color
        sizeId: string; // ID of the selected size
    };
}

// CategoryPage functional component
const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    // Fetch products, sizes, colors, and category information based on parameters
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });

    const sizes = await getSizes(); // Fetch sizes
    const colors = await getColors(); // Fetch colors
    const category = await getCategory(params.categoryId); // Fetch category information
    
    return(
        <div className="bg-white">
            <Container>
                {/* Display billboard */}
                <Billboard data={category.billboard}/>
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Mobile filter */}
                        <MobileFilter sizes={sizes} colors={colors}/>
                        <div className="hidden lg:block">
                            {/* Filters for sizes and colors */}
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
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {/* Display no results if there are no products */}
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {/* Display products */}
                                {products.map((item) => (
                                    <ProductCard key={item.id} data={item}/>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Container>

        </div>
    )
}

export default CategoryPage;