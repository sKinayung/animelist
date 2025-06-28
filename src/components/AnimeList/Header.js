import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-4 text-[#eeeeee]">
            <h1 className="font-bold text-2xl">{title}</h1>
            {
                linkHref && linkTitle
                ? 
                <Link href={linkHref} className="font-bold md:text-xl text-md hover:text-amber-400 transition-all ">{linkTitle}</Link>
                : null
            }
        </div>
    )
}

export default Header