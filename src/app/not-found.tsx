import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center py-20 text-center">
            <div className="text-7xl" aria-hidden="true">🧺</div>

            <p className="mt-6 text-sm font-semibold text-green-700">৪০৪</p>
            <h1 className="mt-1 text-3xl font-bold">পেজটি খুঁজে পাওয়া যায়নি</h1>
            <p className="mt-2 max-w-md text-sm text-gray-600">
                আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, নামটি বদলেছে, অথবা
                ঠিকানাটি ভুল লেখা হয়েছে।
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                    href="/"
                    className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-800"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
                <Link
                    href="/#সব-পণ্য"
                    className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-gray-50"
                >
                    সব পণ্য দেখুন
                </Link>
            </div>
        </div>
    );
}