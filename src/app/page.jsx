// Mengimpor komponen AnimeList dari file animeList.js (atau .tsx) yang berada di direktori: app/components
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResources, getNestedAnimeRecommendation, reproduce } from "../libs/api-libs"

const Page = async() => {
  const topAnime = await getAnimeResources("top/anime", "limit=8")
  let recomendationAnime = await getNestedAnimeRecommendation("recommendations/anime", "entry")
  recomendationAnime = reproduce(recomendationAnime, 4)

  return (
    <div>
      {/* Section Paling Populer */}
      <section>  
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        {/* Mengirim data API ke AnimeList */}
        <AnimeList api={topAnime}/> 
      </section>
      <section>  
        <Header title="Rekomedasi" />
        {/* Mengirim data API ke AnimeList */}
        <AnimeList api={recomendationAnime}/> 
      </section>
    </div>
  )
}

export default Page