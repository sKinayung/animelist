import Link from "next/link"
import InputSearch from "./InputSearch.jsx"

const Navbar = () => {
    return (
        <header className="bg-[#1D427B]">
            {/* Ketika dimensi layar seperti hp, maka navbar akan menjadi 2 baris */}
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">AnimeList</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar