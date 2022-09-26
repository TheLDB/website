import Head from "next/head"

const Home = () => {
    return (
        <>
            <Head>
                <title>Landon Boles</title>
                <meta name="title" content="Landon Boles" />
                <meta
                    name="description"
                    content="Landon Boles - 17yr old software engineer from Colorado ❄️"
                />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="theme-color" content="#e67e22" />
            </Head>
            <div className="w-screen min-h-screen bg-white p-8 flex flex-col space-y-2">
                <h1 className="text-4xl font-poppins font-semibold">Landon Boles</h1>
                <p className="text-2xl font-poppins font-medium">17 | colorado | swe</p>
                <p className="text-2xl font-poppins font-medium"><a target="_blank" rel="noreferrer" href="mailto:ldb@erikboles.com">email me</a> | <a target="_blank" rel="noreferrer" href="https://github.com/TheLDB">github</a> | <a target="_blank" rel="noreferrer" href="https://twitter.com/landon_xyz">bird app</a></p>
                <p className="text-2xl font-poppins font-semibold underline">@lndnNFT on <a target="_blank" rel="noreferrer" href="https://farcaster.xyz">Farcaster</a></p>

                <h1 className="text-3xl font-poppins font-semibold">building:</h1>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <a target="_blank" rel="noreferrer" href="https://github.com/TheLDB/farcaster-rs">🦀 farcaster-rs</a>
                        <li>farcaster-rs is a Rust crate used to interface & interact with the <a target="_blank" rel="noreferrer" href="https://farcaster.xyz" className="text-lg">Farcaster</a> smart contracts & API</li>
                        <li>Built using Rust, Tokio, ethers-rs & more</li>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <a target="_blank" rel="noreferrer" href="https://github.com/TheLDB/degenslacker">🍕 degenslacker</a>
                        <li>degenslacker is a web app for the <a target="_blank" rel="noreferrer" href="https://farcaster.xyz" className="text-lg">Farcaster</a> ecosystem which allows you to create &quot;feeds&quot; and get webhook notifications every time a monitored user sends a cast</li>
                        <li>Built using Typescript, Next, Axios, and more.</li>
                    </div>
                </div>

                <h1 className="text-3xl font-poppins font-semibold pt-12">worked:</h1>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <a target="_blank" rel="noreferrer" href="https://springsit.com">🤖 SpringsIT - Software Engineering Intern</a>
                        <h2 className="text-xl">Jun 2021 - Aug 2021</h2>
                        <li>Developed & deployed backend architecture in <span className="font-bold">C#, .NET, Docker, and more</span></li>
                        <li>Developed & deployed frontend web apps with <span className="font-bold">Angular, CSS, Docker, an more</span></li>
                        <li>Worked in a small team of 3 to design and build out different backend & frontend designs & systems for a variety of clients.</li>

                    </div>

                    <div className="flex flex-col space-y-2">
                        <a target="_blank" rel="noreferrer" href="/">🍔 Classmates Delivery - Co-Founder</a>
                        <h2 className="text-xl">Jan 2021 - Dec 2021</h2>
                        <li>Designed and built microservices that enabled students to order food from local restuarants by leveraging online ordering endpoints using <span className="font-bold">Javascript, Express, Puppeteer, & more</span></li>
                        <li>Designed and built a web app & started work on an iOS app that provided students with an easy and accessible way to order food using <span className="font-bold">React, Axios, Swift, Alamofire, & more</span></li>
                        <li>Launched in 1 local school and talked to multiple other schools before the COVID-19 pandemic</li>
                    </div>
                </div>

                <h1 className="text-3xl font-poppins font-semibold pt-12">built:</h1>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <a target="_blank" rel="noreferrer" href="https://github.com/TheLDB/ratio_terminal_rust">💯 ratio_terminal_rust</a>
                        <li>A Rust rewrite of the original Ratio Terminal (JS) Discord bot</li>
                        <li>Built using Rust, Serenity, Tokio & more</li>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <a target="_blank" rel="noreferrer" href="https://github.com/TheLDB/HopDown">🐰 HopDown</a>
                        <li>A web app built for the 48 hour <a target="_blank" rel="noreferrer" href="https://buildergroop.com" className="text-lg">Buildergroop</a> hackathon</li>
                        <li>A realtime, collaborative Markdown editor that allows you and your team to work together on documentation more efficiently</li>
                        <li>Built using Typescript, Next, <a target="_blank" rel="noreferrer" href="https://hop.io" className="text-lg">Hop</a> & more</li>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;