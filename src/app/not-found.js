"use client"

import { FileSearchIcon } from "@phosphor-icons/react"
import Link from "next/link"


const NotFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 flex-col">
                <FileSearchIcon size={42} className="text-amber-300"/>
                <h1 className="text-amber-300 text-4xl font-extrabold">Not Found</h1>
                <Link href={"/"} className="text-white hover:text-amber-300 text-3xl font-extrabold underline">Kembali</Link>
            </div>
        </div>
    )
}

export default NotFound