"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const UpdateProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const [name, setName] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);

    const sessionName = session?.user?.name ?? "";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSaving(true);

        const { error } = await authClient.updateUser({
            name: (name ?? sessionName).trim(),
        });

        setSaving(false);

        if (error) {
            toast.error("আপডেট ব্যর্থ!");
        } else {
            toast.success("প্রোফাইল আপডেট হয়েছে! ✏️");
            router.push("/profile");
        }
    };

    if (isPending) {
        return <div className="mx-auto mt-10 h-48 max-w-md animate-pulse rounded-2xl bg-gray-200" />;
    }

    return (
        <div className="mx-auto max-w-md py-10">
            <h1 className="text-2xl font-bold">প্রোফাইল আপডেট</h1>
            <p className="mt-1 text-sm text-gray-600">আপনার নাম বদলান।</p>

            <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4 rounded-2xl border border-gray-200 bg-gray-50/60 p-6"
            >
                <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium">
                        নাম
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={name ?? sessionName}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                    />
                </div>

                <button
                    type="submit"
                    disabled={saving}
                    className="w-full rounded-lg bg-green-700 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-800 disabled:opacity-60"
                >
                    {saving ? "আপডেট হচ্ছে..." : "আপডেট"}
                </button>

                <Link href="/profile" className="block text-center text-sm text-gray-500 hover:text-gray-700">
                    ← প্রোফাইলে ফিরে যান
                </Link>
            </form>
        </div>
    );
};

export default UpdateProfilePage;