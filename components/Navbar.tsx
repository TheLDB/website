import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';

const Navbar = () => {
    const [cryptoPrices, setCryptoPrices] = useState<{ ethPrice: number; btcPrice: number }>();

    useEffect(() => {
        const fetchPrices = async () => {
            const ethPrice = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
            const btcPrice = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
            setCryptoPrices({
                ethPrice: ethPrice.data.ethereum.usd as number,
                btcPrice: btcPrice.data.bitcoin.usd as number
            });
        }

        fetchPrices().catch(e => console.log(e));
    }, []);
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