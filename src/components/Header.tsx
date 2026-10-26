import Image from 'next/image';
import Link from 'next/link';
import UserInfo from './UserInfo';


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

            <UserInfo/>
          
        </header>
    );
};

export default Header;