import Hero from "@/components/Hero";
import PriceRisers from "@/components/PriceRisers";
import PriceFallers from "@/components/PriceFallers";
import { getProducts } from "@/lib/utils";
import AllProducts from "@/components/AllProducts";

const HomePage = async () => {
    const products = await getProducts();

    return (
        <div>
            <Hero />
            <PriceRisers products={products} />
            <PriceFallers products={products} />
            <AllProducts products={products}/>
        </div>
    );
};

export default HomePage;