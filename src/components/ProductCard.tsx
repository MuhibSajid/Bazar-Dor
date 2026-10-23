import { bn, unitBn, type Product } from "@/lib/utils";

const ProductCard = ({ product: p }: { product: Product }) => {
    const { dir, pct } = p.change;

    const badgeStyle =
        dir === "up"
            ? "bg-red-50 text-red-600"
            : dir === "down"
            ? "bg-green-50 text-green-600"
            : "bg-gray-100 text-gray-500";

    const arrow = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";

    return (
        <div className="rounded-2xl border border-gray-200/70 bg-white/70 p-4">
            {/* ওপরে: ইমোজি + নাম + একক */}
            <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
                    {p.image}
                </span>
                <div>
                    <div className="font-semibold leading-tight">{p.nameBn}</div>
                    <div className="text-xs text-gray-500">প্রতি {unitBn[p.unit]}</div>
                </div>
            </div>

            {/* নিচে: দাম + ব্যাজ */}
            <div className="mt-4 text-xs text-gray-500">আজকের দাম</div>
            <div className="flex items-end justify-between">
                <div className="text-lg font-bold">
                    {bn(p.today)} <span className="text-sm font-normal">টাকা</span>
                </div>
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${badgeStyle}`}>
                    {arrow} {bn(Math.abs(pct))}%
                </span>
            </div>
        </div>
    );
};

export default ProductCard;