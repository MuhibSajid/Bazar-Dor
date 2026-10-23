export type Product = {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: "kg" | "litre" | "dozen" | "piece";
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: { dir: "up" | "down" | "flat"; pct: number };
    markets: { market: string; division: string; min: number; max: number }[];
};

export async function getProducts(): Promise<Product[]> {
    

    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export const unitBn: Record<Product["unit"], string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
};

export const bn = (n: number) => n.toLocaleString("bn-BD");