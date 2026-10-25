import Link from "next/link";

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path fill="#4285F4" d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.55-5.17 3.55-8.87z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.09A12 12 0 0 0 12 24z" />
        <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.56.37-2.28V6.63H1.27A12 12 0 0 0 0 12c0 1.94.46 3.77 1.27 5.37l4-3.09z" />
        <path fill="#EA4335" d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.27 6.63l4 3.09C6.22 6.88 8.87 4.77 12 4.77z" />
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
);

const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/20";

const labelClass = "mb-1 block text-sm font-medium";

const socialClass =
    "flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium hover:bg-gray-50";

const SignUpPage = () => {
    return (
        <div className="mx-auto max-w-md py-10">
       
            <div className="text-center">
                <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
                <p className="mt-1 text-sm text-gray-600">
                    বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                </p>
            </div>

    
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50/60 p-6">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className={labelClass}>নাম</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="যেমন: মুহিব্বুল্লাহ সাজিদ "
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClass}>ইমেইল</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className={labelClass}>পাসওয়ার্ড</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className={labelClass}>
                            পাসওয়ার্ড নিশ্চিত করুন
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="আবার লিখুন"
                            className={inputClass}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-green-700 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-800"
                    >
                        অ্যাকাউন্ট তৈরি করুন
                    </button>
                </form>

  
                <div className="my-5 flex items-center gap-3 text-xs text-gray-500">
                    <span className="h-px flex-1 bg-gray-200" />
                    অথবা
                    <span className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <button type="button" className={socialClass}>
                        <GoogleIcon />
                        Google দিয়ে চালিয়ে যান
                    </button>
                    <button type="button" className={socialClass}>
                        <GithubIcon />
                        GitHub দিয়ে চালিয়ে যান
                    </button>
                </div>

                <p className="mt-5 text-center text-sm">
                    অ্যাকাউন্ট আছে?{" "}
                    <Link href="/signin" className="font-medium text-green-700 hover:underline">
                        সাইন ইন করুন
                    </Link>
                </p>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
                <Link href="/" className="hover:text-gray-700">
                    ← হোম পেজে ফিরে যান
                </Link>
            </p>
        </div>
    );
};

export default SignUpPage;