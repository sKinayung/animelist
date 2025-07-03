"use client"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    // useRef() adalah React Hook untuk membuat referensi langsung ke elemen DOM.
    const searchRef = useRef ()
    // useRouter() adalah Hook dari Next.js (dari next/router) yang memberi akses ke router.
    const routerPush = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if (!keyword || keyword.trim() == "") return
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            // Mengambil inputan dan menyimpannya sebagai nilai
            // Navigasi ke halaman /search/[keyword]
            routerPush.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input
            className="bg-white w-full p-2 rounded"
            placeholder="Search..."
            ref={searchRef}
            onKeyDown={handleSearch}/>
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlassIcon size={24} />
            </button>
        </div>
    )
}

export default InputSearch