import { useRouter } from "next/router";

interface IExpCard {
    company: string;
    title: string;
    href: string;
    img: string;
    color: string;
    border: string;
    desc: string;
}

const ExpCard = (props: IExpCard) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(props.href)} className={`w-2/3 flex border-2 p-2 rounded-xl ${props.border} up`}>
            <div className="w-[1/8] h-full flex shrink-0 justify-center items-center">
                <img src={props.img} className="w-24 rounded-lg" />
            </div>
            <div className="h-full flex flex-col justify-center px-2">
                <h1 className={`font-poppins text-xl font-bold text-site-white`}>{props.title} @ <span className={`${props.color}`}>{props.company}</span></h1>
                <h1 className={`font-poppins text-md font-medium text-site-white`}>{props.desc}</h1>
            </div>
        </div>
    )
}

export default ExpCard;