import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import ExpCard from "../components/ExpCard";
import Modal from "../components/Modal";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);

    interface Technology {
        name: string;
        color: string;
    }
    const technologies: Technology[] = [
        {
            name: "Typescript,",
            color: "text-blue-400"
        },
        {
            name: "Rust,",
            color: "text-orange-400"
        },
        {
            name: "C#,",
            color: "text-purple-400"
        },
        {
            name: "Next,",
            color: "text-site-white"
        },
        {
            name: "Docker,",
            color: "text-blue-400"
        },
        {
            name: "AWS, ",
            color: "text-orange-500"
        }
    ]

    const getRandomInt = () => {
        return Math.floor(Math.random() * 10000)
    }
    return (
        <>
            <Head>
                <title>Landon Boles</title>
            </Head>
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
            <div className="flex min-h-screen flex-col space-y-8 items-center justify-center py-12 px-24 bg-site-black">
                <div className="w-full flex flex-col space-y-4">
                    <h1 className="font-poppins text-site-white text-5xl font-bold">Landon Boles</h1>
                    <h1 className="font-poppins text-site-white text-2xl font-bold">17 year old new-grad software engineer.</h1>
                    <button onClick={() => setModalOpen(true)} className="w-28 h-12 bg-gradient-to-r bg-blue-400 text-site-white font-poppins font-semibold rounded-xl up">
                        Contact Me
                    </button>
                </div>
                <div className="w-full flex flex-col space-y-4">
                    <h1 className="font-poppins text-5xl font-bold grad-text from-[#FDC830] to-[#F37335]">About Me 👋</h1>
                    <h1 className="font-poppins text-site-white text-xl font-normal">I got into programming in 2012 when I got my first laptop, and wrote my very first executable script in <span className="font-bold grad-text from-[#FF416C] to-[#FF4B2B]">Ruby! 💎</span></h1>
                    <h1 className="font-poppins text-site-white text-xl font-normal">Since then, I&apos;ve developed my skillset, and grown a passion for developing all around. Whether it&apos;s exploring new technologies and frameworks, or writing blazing fast systems.</h1>
                    <h1 className="font-poppins grad-text from-[#2193b0] to-[#6dd5ed] font-bold text-3xl">Hobbies 🏔️</h1>
                    <h1 className="font-poppins text-site-white text-xl font-normal">In my free time, I enjoying snowboarding, playing with my dog (2 year old Bernedoodle 🐶), and overall spending time with family and friends.</h1>
                </div>
                <div className="w-full flex flex-col space-y-4">
                    <h1 className="font-poppins text-5xl font-bold grad-text pb-2 from-[#11998e] to-[#38ef7d]">Experience & Projects 🔨</h1>
                    <div className="flex space-x-2">
                        <h1 className="font-poppins font-semibold text-2xl text-site-white">Technologies I am comforatable with:</h1>
                        {technologies.map(technology => (
                            <h1 key={technology.name} className={`font-poppins font-semibold text-lg ${technology.color}`}>{technology.name}</h1>
                        ))}
                        <h1 className="font-poppins font-semibold text-lg text-green-300">... and many more</h1>
                    </div>
                    <ExpCard company="SpringsIT" title="Intern SWE" href="https://springsit.com" color="text-blue-400" border="border-blue-400" desc="Worked in a small team to build out and scale blazingly fast backend architecture using C# and Docker" img="/SpringsIT.png" />
                    <ExpCard company="Classmates Delivery" title="Co-Founder" href="/" color="text-orange-400" border="border-orange-400" desc="Built a school focused food delivery startup with a classmate. Launched in 1 school and talked to several others before COVID-19." img="/Classmates.png" />
                </div>
                <div className="w-full flex flex-col space-y-4">
                    <ProjectCard title="Nuitaka" href="https://github.com/Nuitaka" color="text-blue-300" border="border-blue-300" desc="Nuitaka is the first escrow service for NFT projects. We're building a way to reduce the amount of scams and keep founders reliable in their spending, while maintaining decentralization and trustless architecture." languages={["Typescript, ", "Rust, ", "Docker, ", "Solidity"]} wip={false} />
                    <ProjectCard title="Degenslacker" href="https://github.com/TheLDB/degenslacker" color="text-orange-300" border="border-orange-300" desc="Built a web app for Farcaster that allows users to monitor users casts and get a webhook notification every time they send a cast." languages={["Typescript"]} wip={true} />
                    <ProjectCard title="farcaster-rs" href="https://github.com/TheLDB/farcaster-rs" color="text-purple-400" border="border-purple-400" desc="A rust crate that allows for interaction with the Farcaster V2 contracts & APIs via Rust" languages={["Rust"]} wip={true} />
                    <ProjectCard title="Hopdown" href="https://github.com/TheLDB/hopdown" color="text-blue-400" border="border-blue-400" desc="A realtime, collaborative Markdown editor built for a 48 hour hackathon. Powered by hop.io" languages={["Typescript"]} wip={false} />
                </div>
            </div>
        </>
    )
}

export default Home;