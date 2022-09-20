import { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Landon Boles</title>
      </Head>
      <div className="w-full h-screen bg-site-black">
        <Navbar />
        <div className="w-full h-[calc(100%-7rem)] bg-blue-500">

        </div>
      </div>
    </div>
  )
}

export default Home;