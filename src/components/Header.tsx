import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-3">
                <Image
                    className="w-10 h-10 rounded-xl"
                    height={50}
                    width={50}
                    src="/Stack.png"
                    alt="Logo"
                />
                <div className="leading-tight">
                    <div className="font-bold text-lg">বাজার দর</div>
                    <div className="font-light text-xs text-gray-600">{date}</div>
                </div>
            </Link>

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
          
        </header>
    );
};

export default Header;