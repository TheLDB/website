const Main = () => {
    return (
        <div className="w-full h-full flex flex-col space-y-6 items-center justify-center overflow-y-scroll">
            <div className="w-full lg:w-1/2 p-12 lg:p-0 h-auto flex flex-col space-y-4">
                <h1 className="font-mono text-site-white font-bold text-6xl italic">Hi! 👋 I&apos;m Landon.</h1>
                <h1 className="font-mono text-site-white font-light text-xl">I&apos;m a 17 year old software engineer from <span className="text-blue-300">Colorado</span> who&apos;s passionate about high-performance backend systems & how Web3 can revolutionize industries.</h1>
            </div>

            <div className="w-full lg:w-1/2 p-12 lg:p-0 h-auto flex flex-col space-y-4">
                <h1 className="font-mono text-site-white font-bold text-4xl italic">💭 What I&apos;m Doing</h1>
                <h1 className="font-mono text-site-white font-light text-lg">Currently, I&apos;m looking for <span className="text-green-300">new opportunities</span> at startups or established companies to join teams and build cool products.</h1>
                <h1 className="font-mono text-site-white font-light text-lg">On the side, I&apos;m working on <span className="text-blue-300 text-underline text-underline-blue">Nuitaka.</span> Nuitaka is the first escrow service for NFT projects. Helping to prevent rugs & irresponsible spending in the Web3 space.</h1>
            </div>

            <div className="w-full lg:w-1/2 p-12 lg:p-0 h-auto flex flex-col space-y-4">
                <h1 className="font-mono text-site-white font-bold text-4xl italic">👨‍💻 What I&apos;ve Done </h1>
                <div className="flex flex-col space-y-2">
                    <h1 className="font-mono text-blue-300 font-bold text-2xl">SpringsIT</h1>
                    <h1 className="font-mono text-gray-300 font-normal text-xl">Intern SWE</h1>
                    <h1 className="font-mono text-site-white font-light text-lg">Built high-performance, scalable backend systems in C# and developed multiple frontend dashboards for clients while working in a small team of 3. <span className="font-bold text-blue-300">(C#, .NET, Docker, MS SQL Studio, Angular, JS)</span></h1>
                </div>
                <div className="flex flex-col space-y-2">
                    <h1 className="font-mono text-purple-300 font-bold text-2xl">Degenslacker <a href="https://github.com/TheLDB/degenslacker" className="underline">(Github)</a></h1>
                    <h1 className="font-mono text-gray-300 font-normal text-xl">Side Project</h1>
                    <h1 className="font-mono text-site-white font-light text-lg">Built a web application that allowed users to create &quot;feeds&quot; and get webhook notifications every time a user sends a cast. <span className="font-bold text-purple-300">(Next, Typescript, Web3.JS, Axios, Cron Jobs)</span></h1>
                </div>
                <a href="https://github.com/TheLDB/degenslacker" className="font-mono text-green-300 font-bold text-xl underline">... and a lot more on my github!</a>
            </div>
            <div className="w-full lg:w-1/2 p-12 lg:p-0 h-auto flex flex-col space-y-4">
                <h1 className="font-mono text-site-white font-bold text-4xl italic">📨 Contact Me </h1>
                    <a href="mailto:ldb@erikboles.com" className="font-mono text-site-white font-bold text-2xl underline">Email Me</a>
                    <a href="https://twitter.com/lndnNFT" className="font-mono text-blue-300 font-bold text-2xl underline">DM me on Twitter</a>

            </div>
        </div>
    )
}

export default Main;