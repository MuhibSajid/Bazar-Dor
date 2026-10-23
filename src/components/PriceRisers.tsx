import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/utils";


const PriceRisers = ({ products }: { products: Product[] }) => {
    const risers = products
        .filter((p) => p.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <section className="my-8">
            <h2 className="mb-4 text-xl font-bold">
                <span className="text-red-600">▲</span> আজ দাম বেড়েছে
            </h2>
            <div>
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {risers.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
               
                 </div>
             </div>
        </section>
    );
};

export default PriceRisers;