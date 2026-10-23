import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <section className="my-6 flex items-center justify-between gap-6 overflow-hidden rounded-3xl border border-green-100 bg-linear-to-r from-green-50 to-green-100 p-6 md:p-10">
            <div className="max-w-xl">
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 ring-1 ring-green-200">
                    {date}
                </span>

                <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
                    গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>

               <Link
                        href="#সব-পণ্য"
                        className="mt-5 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-800"
                    >
                        সব পণ্য দেখুন
                    </Link>
            </div>

            <Image
            src="/bazar-hero.png"
            alt="সবজির ঝুড়ি"
            width={320}
            height={260}
            priority
            className="hidden h-auto w-56 shrink-0 sm:block md:w-72"
        />
        </section>
    );
};

export default Hero;