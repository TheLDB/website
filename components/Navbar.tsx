import Link from "next/link";

interface INavbar {
    cryptoPrices: { ethPrice: number; btcPrice: number} | undefined;
}

const Navbar = (props: INavbar) => {
    const [cryptoPrices] = [props.cryptoPrices];
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
                    <Link href="https://github.com/TheLDB">
                        <h1 className="font-mono text-green-300 font-light text-2xl link-underline link-underline-black hover:cursor-pointer">github</h1>
                    </Link>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <Link href="https://www.linkedin.com/in/landon-boles-16b686143/">
                        <h1 className="font-mono text-blue-300 font-light text-2xl link-underline link-underline-black hover:cursor-pointer">linkedin</h1>
                    </Link>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <Link href="mailto:ldb@erikboles.com">
                        <h1 className="font-mono text-purple-300 font-light text-2xl link-underline link-underline-black hover:cursor-pointer">contact</h1>
                    </Link>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.coingecko.com/en/coins/ethereum" className="font-mono text-site-white font-light text-2xl link-underline link-underline-black hover:cursor-pointer">Ξ ${cryptoPrices?.btcPrice.toLocaleString()}</a>
                    <h1 className="font-mono text-white font-semibold text-2xl">|</h1>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.coingecko.com/en/coins/ethereum" className="font-mono text-site-white font-light text-2xl link-underline link-underline-black hover:cursor-pointer">Ξ ${cryptoPrices?.ethPrice.toLocaleString()}</a>
                </div>
            </div>
        </div>
    )
}

export { Navbar };