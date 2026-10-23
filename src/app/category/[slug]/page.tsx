"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SortDropdown, { type SortOption } from "@/components/SortDropdown";
import { bn, type Product } from "@/lib/utils";

type Category = {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
};

const API = "https://api.api-store.workers.dev/api/bazardor";

const CategoryPage = () => {
    const params = useParams();
    const slug = params.slug as string;

    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [sortBy, setSortBy] = useState<SortOption>("default");

    useEffect(() => {
        let ignore = false;

        const load = async () => {
            setLoading(true);
            setError(false);
            try {
                const [productsRes, categoryRes] = await Promise.all([
                    fetch(`${API}/products?category=${slug}`),
                    fetch(`${API}/categories/${slug}`),
                ]);

                if (!productsRes.ok || !categoryRes.ok) throw new Error("fetch failed");

                const [productsData, categoryData] = await Promise.all([
                    productsRes.json(),
                    categoryRes.json(),
                ]);

                if (ignore) return;
                setProducts(productsData);
                setCategory(categoryData);
            } catch {
                if (!ignore) setError(true);
            } finally {
                if (!ignore) setLoading(false);
            }
        };

        load();
        return () => {
            ignore = true;
        };
    }, [slug]);

    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === "price-asc") return a.today - b.today;
        if (sortBy === "price-desc") return b.today - a.today;
        return 0;
    });

    if (loading) {
        return (
            <div className="py-6" aria-busy="true">
                <div className="h-20 animate-pulse rounded-2xl bg-gray-200" />
                <div className="mt-5 h-14 animate-pulse rounded-2xl bg-gray-200" />
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-32 animate-pulse rounded-2xl bg-gray-200" />
                    ))}
                </div>
            </div>
        );
    }

    if (error || products.length === 0) {
        return (
            <div className="py-20 text-center">
                <p className="text-lg font-semibold">কোনো পণ্য পাওয়া যায়নি</p>
                <Link
                    href="/"
                    className="mt-4 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        );
    }

    return (
        <div className="py-6">
            <div className="flex items-center gap-4 rounded-2xl border border-gray-200/70 bg-white/70 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-3xl">
                    {category?.icon ?? products[0].categoryIcon}
                </span>
                <div>
                    <h1 className="text-2xl font-bold">
                        {category?.nameBn ?? products[0].categoryNameBn}
                    </h1>
                    <p className="text-xs text-gray-500">
                        {bn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>

            <div className="mt-5">
                <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            <p className="my-4 text-xs text-gray-500">
                মোট {bn(sortedProducts.length)}টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;