import { Dispatch, SetStateAction, useState } from "react";

interface INavigationModal {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    cryptoPrices: { ethPrice: number; btcPrice: number} | undefined;

}

const NavigationModal = (props: INavigationModal) => {
    const [links, setLinks] = useState<{
        id: number;
        name: string;
        color: string;
        link: string;
    }[]>([
        {
            id: 0,
            name: "blog",
            color: "#FBFAF5",
            link: "/"
        },
        {
            id: 1,
            name: "github",
            color: "#86efac",
            link: "https://github.com/TheLDB/"
        },
        {
            id: 2,
            name: "linkedin",
            color: "#93c5fd",
            link: "https://www.linkedin.com/in/landon-boles-16b686143"
        },
        {
            id: 3,
            name: "contact",
            color: "#d8b4fe",
            link: "mailto:ldb@erikboles.com"
        }
]);
    return (
        <div onClick={() => props.setModalOpen(false)} className="w-screen h-screen absolute top-0 bottom-0 left-0 right-0 bg-site-black/75 flex justify-center items-center p-4">
            <div onClick={e => e.stopPropagation()} className="min-h-[7rem] w-full bg-site-black border-[3px] border-gray-800 rounded-xl">
                {links.map(link => (
                    <div className="w-full h-12 p-4 flex justify-center items-center">
                        <a href={link.link} style={{ color: link.color }} className="font-mono text-lg">{link.name}</a>
                    </div>
                ))}
                <div className="w-full h-12 p-4 flex justify-center items-center">
                        <a href="https://www.coingecko.com/en/coins/bitcoin" className="font-mono text-lg text-site-white">₿ ${props.cryptoPrices?.btcPrice}</a>
                </div>
                <div className="w-full h-12 p-4 flex justify-center items-center">
                        <a href="https://www.coingecko.com/en/coins/ethereum" className="font-mono text-lg text-site-white">Ξ ${props.cryptoPrices?.ethPrice}</a>
                </div>
            </div>
        </div>
    )
}

export { NavigationModal }; 