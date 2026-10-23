"use client";

export type SortOption = "default" | "price-asc" | "price-desc";

type Props = {
    value: SortOption;
    onChange: (value: SortOption) => void;
};

const SortDropdown = ({ value, onChange }: Props) => {
    return (
        <div className="flex items-center justify-end gap-2 rounded-2xl border border-gray-200/70 bg-white/70 p-4 text-sm">
            <label htmlFor="sort" className="text-gray-500">
                সাজান
            </label>
            <select
                id="sort"
                value={value}
                onChange={(e) => onChange(e.target.value as SortOption)}
                className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm outline-none focus:border-green-600"
            >
                <option value="default">ডিফল্ট</option>
                <option value="price-asc">দাম: কম থেকে বেশি</option>
                <option value="price-desc">দাম: বেশি থেকে কম</option>
            </select>
        </div>
    );
};

export default SortDropdown;