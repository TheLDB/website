import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-28 flex justify-center items-center">
            <div className="w-full h-full flex">
                <div className="w-full h-full p-4 flex items-center justify-center space-x-2">
                    <h1 className="font-mono text-gradient font-bold text-2xl">Landon Boles</h1>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <Link href="/">
                        <h1 className="font-mono text-site-white font-light text-2xl link-underline link-underline-black hover:cursor-pointer">blog</h1>
                    </Link>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <Link href="/">
                        <h1 className="font-mono text-green-300 font-light text-2xl link-underline link-underline-black hover:cursor-pointer">github</h1>
                    </Link>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <Link href="/">
                        <h1 className="font-mono text-blue-300 font-light text-2xl link-underline link-underline-black hover:cursor-pointer">linkedin</h1>
                    </Link>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <Link href="/">
                        <h1 className="font-mono text-purple-300 font-light text-2xl link-underline link-underline-black hover:cursor-pointer">contact</h1>
                    </Link>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <Link href="/">
                        <h1 className="font-mono text-site-white font-light text-2xl link-underline link-underline-black hover:cursor-pointer">₿ $18k</h1>
                    </Link>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <Link href="/">
                        <h1 className="font-mono text-site-white font-light text-2xl link-underline link-underline-black hover:cursor-pointer">Ξ $1.8k</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Navbar };