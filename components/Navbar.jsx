import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex overflow-hidden justify-between animate-fade-in-top items-center p-5 sm:p-20 bg-cardPrimary px-full sm:py-10 py-8 ">
                <div className="animate-fade-in-left">
                    <Link href="/" className="font-bold text-highlight text-3xl sm:text-4xl">ToDo</Link>
                </div>
                <div className="flex sm:gap-5 gap-2">
                    <Link href="/SignIn" className="font-bold animate-fade-in-right bg-yellow-200 px-5 py-3 sm:px-10 sm:py-4 rounded-xl hover:scale-95 transition-all ease-linear hover:bg-blue-900 hover:text-white active:bg-yellow-200 active:text-black">SIGN IN</Link>
                </div>
            </div>
        </>
    )
}