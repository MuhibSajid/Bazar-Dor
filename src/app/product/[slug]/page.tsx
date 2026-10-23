import Link from "next/link";
import { notFound } from "next/navigation";
import { bn, getProducts, unitBn } from "@/lib/utils";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = (await getProducts()).find((item) => item.slug === slug);
    if (!product) notFound();


    const minPrice = Math.min(...product.markets.map((m) => m.min));
    const maxPrice = Math.max(...product.markets.map((m) => m.max));
    const avgPrice = Math.round(
        product.markets.reduce((s, m) => s + (m.min + m.max) / 2, 0) /
            product.markets.length
    );


    const rows = [...product.markets].sort((a, b) => a.min - b.min);


    const { dir, pct } = product.change;
    const diff = Math.abs(product.today - product.yesterday);
    const unit = unitBn[product.unit];
    const dirText = dir === "up" ? "বেড়েছে" : dir === "down" ? "কমেছে" : "অপরিবর্তিত";
    const dirColor =
        dir === "up" ? "text-red-600" : dir === "down" ? "text-green-600" : "text-gray-500";
    const arrow = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";

    const card = "rounded-2xl border border-gray-200/70 bg-white/70";

    return (
        <div className="space-y-6 py-6">
            {/* Breadcrumb */}
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">হোম</Link></li>
                    <li>
                        <Link href={`/category/${product.category}`}>
                            {product.categoryNameBn}
                        </Link>
                    </li>
                    <li>{product.nameBn}</li>
                </ul>
            </div>


            <div className={`${card} flex flex-wrap items-center justify-between gap-4 p-5`}>
                <div className="flex items-center gap-4">
                    <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-4xl">
                        {product.image}
                    </span>
                    <div>
                        <h1 className="text-3xl font-bold">{product.nameBn}</h1>
                        <p className="text-sm text-gray-500">
                            প্রতি {unit} · {product.categoryNameBn}
                        </p>
                        <p className="mt-1 text-sm">
                            গতকালের তুলনায় আজ দাম{" "}
                            <span className="font-bold">{dirText}</span>
                            {dir !== "flat" && ` · ${bn(diff)} টাকা`}
                        </p>
                    </div>
                </div>

                <div className="min-w-40 rounded-2xl bg-gray-100 p-4 text-center">
                    <div className="text-xs text-gray-500">আজকের দাম</div>
                    <div className="text-3xl font-bold">{bn(product.today)}</div>
                    <div className="text-xs text-gray-500">টাকা / {unit}</div>
                    <div className={`mt-1 text-xs font-semibold ${dirColor}`}>
                        {arrow} {bn(Math.abs(pct))}%
                    </div>
                </div>
            </div>

        
            <div className={`${card} p-5`}>
                <h2 className="mb-3 text-lg font-bold">দামের সারসংক্ষেপ</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    <div className={`${card} p-4`}>
                        <div className="text-xs">সর্বনিম্ন দাম</div>
                        <div className="text-2xl font-bold text-green-700">
                            {bn(minPrice)} <span className="text-sm font-normal">টাকা</span>
                        </div>
                        <div className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার</div>
                    </div>
                    <div className={`${card} p-4`}>
                        <div className="text-xs">সর্বাধিক দাম</div>
                        <div className="text-2xl font-bold text-red-600">
                            {bn(maxPrice)} <span className="text-sm font-normal">টাকা</span>
                        </div>
                        <div className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</div>
                    </div>
                    <div className={`${card} p-4`}>
                        <div className="text-xs">গড় দাম</div>
                        <div className="text-2xl font-bold text-green-700">
                            {bn(avgPrice)} <span className="text-sm font-normal">টাকা</span>
                        </div>
                        <div className="text-xs text-gray-500">প্রতি {unit}-এর হিসাবে</div>
                    </div>
                </div>

                <h2 className="mb-3 mt-8 text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200/70">
                    <table className="table table-zebra">
                        <thead>
                            <tr className="text-gray-500">
                                <th>বাজার</th>
                                <th>বিভাগ</th>
                                <th className="text-right">সর্বনিম্ন</th>
                                <th className="text-right">সর্বাধিক</th>
                                <th className="text-right">গড়</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((m) => (
                                <tr key={m.market}>
                                    <td>{m.market}</td>
                                    <td className="text-gray-600">{m.division}</td>
                                    <td className="text-right">{bn(m.min)} টাকা</td>
                                    <td className="text-right">{bn(m.max)} টাকা</td>
                                    <td className="text-right font-bold">
                                        {bn((m.min + m.max) / 2)} টাকা
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}