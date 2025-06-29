"use client"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import React, { useEffect, useState } from "react"
import { getAnimeResources } from "../libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    const fetchData = async() => {
        const daftarAnime = await getAnimeResources("top/anime",`page=${page}`)
        setTopAnime(daftarAnime)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderMenu title={`Daftar Anime #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination
            page={page}
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}/>
        </>
    )
}

export default Page