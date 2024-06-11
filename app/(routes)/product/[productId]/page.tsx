import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

// Define props interface for ProductPage component
interface ProductPageProps {
    params: {
        productId: string; // Product ID
    };
}


const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    // Fetch product details
    const product = await getProduct(params.productId);
    // Fetch suggested products based on the category of the main product
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    });

    return(
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Gallery to display product images*/}
                        <Gallery images={product.images}/>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            {/* product information */}
                            <Info data={product}/>
                        </div>
                    </div>
                    <hr className="my-10"/>
                    {/* Display related products */}
                    <ProductList title="Related Items" items={suggestedProducts}/>
                </div>
            </Container>
        </div>
    );
}

export default ProductPage;