import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Main from "../components/Main";
import MobileNavbar from "../components/MobileNavbar";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
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
    <div className="w-screen h-screen overflow-x-hidden">
      <Head>
        <title>Landon Boles</title>
      </Head>
      <div className="w-full h-full bg-site-black">
        <div className="hidden md:block">
          <Navbar cryptoPrices={cryptoPrices} />
        </div>
        <div className="block md:hidden">
          <MobileNavbar cryptoPrices={cryptoPrices} />
        </div>
        <div className="w-full h-auto lg:h-[calc(100%-10rem)] lg:min-h-[60rem] bg-site-black">
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;