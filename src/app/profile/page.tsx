"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );
    const router = useRouter();

    if (!mounted || isPending) {
        return (
            <div className="mx-auto max-w-3xl py-8">
                <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
                <div className="mt-6 h-32 animate-pulse rounded-2xl bg-gray-200" />
            </div>
        );
    }

    const user = session?.user;

    if (!user) {
        return (
            <div className="py-20 text-center">
                <p className="text-lg font-semibold">প্রোফাইল দেখতে সাইন ইন করুন</p>
                <Link
                    href="/signin"
                    className="mt-4 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
                >
                    সাইন ইন
                </Link>
            </div>
        );
    }

    const initial = user.name?.trim().charAt(0).toUpperCase() || "?";

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();
        if (error) {
            toast.error(error.message || "সাইন আউট ব্যর্থ!");
            return;
        }
        toast.success("সাইন আউট সফল!");
        router.push("/");
        router.refresh();
    };

    return (
        <div className="mx-auto max-w-3xl py-8">
            <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
            <p className="mt-1 text-sm text-gray-600">
                আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-gray-50/60 p-6">
                <div className="flex items-center gap-4">
                    {user.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={user.image}
                            alt={user.name}
                            referrerPolicy="no-referrer"
                            className="h-20 w-20 rounded-xl bg-gray-100 object-cover"
                        />
                    ) : (
                        <span
                            aria-hidden="true"
                            className="flex h-20 w-20 items-center justify-center rounded-xl bg-green-700 text-3xl font-bold text-white"
                        >
                            {initial}
                        </span>
                    )}
                    <div>
                        <div className="text-xl font-semibold">{user.name}</div>
                        <div className="text-gray-600">{user.email}</div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Link
                        href="/profile/update"
                        className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
                    >
                        প্রোফাইল এডিট করুন
                    </Link>
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="rounded-lg border border-red-500 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                        ↩ সাইন আউট
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;