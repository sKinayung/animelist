import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-[#1D427B]">
            {/* Ketika dimensi layar seperti hp, maka navbar akan menjadi 2 baris */}
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">AnimeList</Link>
                <input className="bg-white  " placeholder="Search..."/>
            </div>
        </header>
    )
}

export default Navbar