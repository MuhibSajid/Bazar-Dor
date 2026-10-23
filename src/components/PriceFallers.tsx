import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/utils";
import Link from "next/link";

const PriceRisers = ({ products }: { products: Product[] }) => {
    const risers = products
        .filter((p) => p.change.dir === "down")
        .sort((a, b) => a.change.pct - b.change.pct)
        .slice(0, 6);

    return (
        <section className="my-8">
            <h2 className="mb-4 text-xl font-bold">
                <span className="text-green-600">▼</span> আজ দাম কমেছে 
            </h2>
            <Link href="#">
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {risers.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
               
                 </div>
             </Link>
        </section>
    );
};

export default PriceRisers;