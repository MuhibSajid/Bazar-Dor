import ProductCard from "@/components/ProductCard";
import { bn, type Product } from "@/lib/utils";


const AllProducts = ({ products }: { products: Product[] }) => {
    return (
        <section id="সব-পণ্য" className="my-8 scroll-mt-4">
            <h2 className="text-xl font-bold">সব পণ্য</h2>
            <p className="mb-4 text-sm text-gray-500">
                মোট {bn(products.length)}টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
};

export default AllProducts;