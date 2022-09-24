import { Dispatch, SetStateAction } from "react";
interface IModal {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: IModal) => {
    return (
        <div onClick={() => props.setModalOpen(false)} className="w-screen h-screen absolute bg-site-black/75 flex justify-center items-center">
            <div onClick={e => e.stopPropagation()} className="w-1/3 h-auto p-6 bg-site-black border border-site-white rounded-xl drop-shadow-2xl flex flex-col space-y-4 items-center relative">
            <div onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                props.setModalOpen(false);
            }} className="w-14 h-14 bg-red-400/60 rounded-lg flex justify-center items-center up absolute top-6 right-6">
                        <h1 className="font-poppins text-3xl font-bold text-site-white">X</h1>
                    </div>
                <h1 className="font-poppins text-site-white font-bold text-5xl">Contact Me</h1>
                <a target={"_blank"} rel="noreferrer" href="mailto:ldb@erikboles.com" className="font-poppins text-green-300 font-semibold text-3xl">Email me</a>
                <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/landon-boles-16b686143/" className="font-poppins text-blue-400 font-semibold text-3xl">Linkedin</a>
                <a target={"_blank"} rel="noreferrer" href="https://twitter.com/landon_xyz" className="font-poppins text-blue-400 font-semibold text-3xl">Twitter</a>

            </div>
        </div>
    )
}

export default Modal;