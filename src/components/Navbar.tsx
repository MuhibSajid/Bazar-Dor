import Link from "next/link";

type Category = {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
};

const Navbar = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const data: Category[] = await res.json();

    return (
        <nav className="flex items-center gap-8 overflow-x-auto py-3 border-t border-gray-200 ">
            {data.map((n) => (
                <Link
                    key={n.id}
                    href={`/category/${n.slug}`}
                    className="flex shrink-0 items-center gap-2 text-sm font-semibold hover:text-green-700"
                >
                    <span className="text-lg">{n.icon}</span>
                    <span>{n.nameBn}</span>
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;