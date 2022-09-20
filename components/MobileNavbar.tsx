import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { NavigationModal } from './NavigationModal';

interface IMobileNavbar {
    cryptoPrices: { ethPrice: number; btcPrice: number} | undefined;
}

const MobileNavbar = (props: IMobileNavbar) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="w-full h-28 flex">
            {modalOpen && <NavigationModal setModalOpen={setModalOpen} cryptoPrices={props.cryptoPrices} />}
            <div className="w-3/4 h-full flex p-4 items-center">
                <h1 className="font-mono text-gradient font-bold text-2xl">Landon Boles</h1>
            </div>
            <div className="w-1/4 h-full flex justify-end items-center p-4">
                <div onClick={() => setModalOpen(!modalOpen)} className="w-14 h-14 bg-gradient-to-br from-[#f12711] to-[#f5af19] flex justify-center items-center rounded-xl">
                    <Bars3Icon className="w-12 h-12 text-site-white" />
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar;