"use client";

import { useSyncExternalStore } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const UserInfo = () => {
    const { data: session, isPending } = authClient.useSession();
    const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
    const router = useRouter();

    if (!mounted || isPending) {
        return <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-200" />;
    }

    const user = session?.user;

    if (!user) {
        return (
            <div className="flex items-center gap-5">
                <Link href="/signin" className="text-sm font-semibold hover:text-green-700">
                    সাইন ইন
                </Link>
                <Link
                    href="/signup"
                    className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-800"
                >
                    সাইন আপ
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
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="flex cursor-pointer items-center gap-2 rounded-full py-1 pl-1 pr-3 hover:bg-gray-100"
            >
                {user.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={user.image}
                        alt={user.name ?? "ব্যবহারকারী"}
                        referrerPolicy="no-referrer"
                        className="h-9 w-9 rounded-full object-cover"
                    />
                ) : (
                    <span
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white"
                    >
                        {initial}
                    </span>
                )}
                <span className="text-sm font-medium">{user.name?.split(" ")[0]}</span>
                <span className="text-[20px] text-gray-500" aria-hidden="true">▾</span>
            </div>

            <div
                tabIndex={0}
                className="dropdown-content z-50 mt-2 w-64 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
            >
                <div className="border-b border-gray-100 pb-3">
                    <div className="font-bold">{user.name}</div>
                    <div className="truncate text-xs text-gray-500">{user.email}</div>
                </div>

                <ul className="mt-2 space-y-1 text-sm">
                    <li>
                        <Link
                            href="/profile"
                            className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-gray-100"
                        >
                            <span aria-hidden="true">👤</span> আমার প্রোফাইল
                        </Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-red-600 hover:bg-red-50"
                        >
                            <span aria-hidden="true">↩</span> সাইন আউট
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserInfo;