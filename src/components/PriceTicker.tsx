"use client";

import { useEffect, useState } from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

type Product = {
    id: number;
    nameBn: string;
    categoryIcon: string;
    unit: string;
    today: number;
    change: { dir: "up" | "down" | "flat"; pct: number };
};

const unitBn: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
};

const bn = (n: number) => n.toLocaleString("bn-BD");

const PriceTicker = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://api.api-store.workers.dev/api/bazardor/products")
            .then((res) => res.json())
            .then((data: Product[]) => setProducts(data))
            .catch((err) => console.error("Ticker fetch failed:", err));
    }, []);

    if (products.length === 0) return null;

    return (
        <div className="overflow-hidden border-y border-gray-200 bg-white py-2">
            <MarqueeText 
             duration={30}
            pauseOnHover={true}
            direction="right"
                 >
                {products.map((p) => {
                    const { dir, pct } = p.change;
                    const color =
                        dir === "up" ? "text-red-600" : dir === "down" ? "text-green-600" : "text-gray-500";
                    const arrow = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";

                    return (
                        <span key={p.id} className="mx-5 inline-flex items-center gap-2 text-sm whitespace-nowrap">
                            <span>{p.categoryIcon}</span>
                            <span>{p.nameBn}</span>
                            <span>{bn(p.today)} টাকা/{unitBn[p.unit] ?? p.unit}</span>
                            <span className={`font-semibold ${color}`}>
                                {arrow} {bn(Math.abs(pct))}%
                            </span>
                        </span>
                    );
                })}
            </MarqueeText>
        </div>
    );
};

export default PriceTicker;