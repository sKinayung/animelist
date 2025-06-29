// Mengimpor komponen AnimeList dari file animeList.js (atau .tsx) yang berada di direktori: app/components
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResources } from "./libs/api-libs"

const Page = async() => {
  const topAnime = await getAnimeResources("top/anime", "limit=8")

  return (
    <div>
      {/* Section Paling Populer */}
      <section>  
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        {/* Mengirim data API ke AnimeList */}
        <AnimeList api={topAnime}/> 
      </section>
    </div>
  )
}

export default Page