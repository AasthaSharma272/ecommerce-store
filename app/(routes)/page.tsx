import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

// HomePage component definition
const HomePage = async () => {
    // Fetching featured products and billboard
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("6731f7b1-bf15-4ecb-9c45-e077631711b5");

    // Returning JSX to render the home page content
    return(
        <Container>
            {/* Container for page content */}
            <div className="space-y-10 pb-10">
                {/* Billboard component with fetched data */}
                <Billboard data={billboard}/>
                {/* ProductList component to display featured products */}
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage;