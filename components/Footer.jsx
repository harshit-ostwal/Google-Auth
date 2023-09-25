export default function Footer() {
    return (
        <>
            <div className="flex overflow-hidden animate-fade-in-down flex-col gap-1 sm:flex-row justify-between items-center p-5 sm:p-20 bg-cardPrimary px-full sm:py-14 py-10">
                <p className="text-primary font-bold animate-fade-in-left">All Rights Reserved &copy; {new Date().getFullYear()}</p>
                <p className="text-primary font-bold animate-fade-in-right">Built By &#10084; Harshit Ostwal</p>
            </div>
        </>
    )
}