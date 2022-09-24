import { useRouter } from "next/router";

interface IProjectCard {
    title: string;
    desc: string;
    href: string;
    color: string;
    border: string;
    languages: string[];
    wip: boolean;
}

const ProjectCard = (props: IProjectCard) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(props.href)} className={`w-full sm:w-2/3 flex border-2 p-2 rounded-xl ${props.border} up`}>
            <div className="h-full flex flex-col justify-center px-2">
                {props.wip && (
                    <div className="w-20 h-6 bg-purple-400/80 rounded-full flex justify-center items-center">
                        <h1 className="font-poppins font-semibold text-site-white text-lg">WIP</h1>
                    </div>
                )}
                <h1 className={`font-poppins text-xl font-bold text-site-white`}>{props.title}</h1>
                <h1 className={`font-poppins text-md font-medium text-site-white`}>{props.desc}</h1>
                <h1 className={`font-poppins text-lg font-medium text-site-white`}>Languages: {props.languages}</h1>
            </div>
        </div>
    )
}

export default ProjectCard;