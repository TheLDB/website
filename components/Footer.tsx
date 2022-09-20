const Footer = () => {
    return (
        <div className="w-full h-12 bg-site-black border-t border-site-white flex">
            <div className="w-1/2 h-full flex space-x-4 items-center p-2">
                <h1 className="font-mono text-md text-site-white font-light">Made with ❤️ by Landon Boles</h1>
            </div>
            <div className="w-1/2 h-full flex space-x-4 items-center justify-end p-2">
                <a href="https://coingecko.com" rel="noopener noreferrer" className="font-mono text-md text-site-white font-light link-underline link-underline-green">Data from <span className="text-gradient-green">CoinGecko</span></a>
            </div>
        </div>
    )
}

export { Footer };