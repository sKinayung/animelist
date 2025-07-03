// Mengimpor komponen AnimeList dari file animeList.js (atau .tsx) yang berada di direktori: app/components
import { getAnimeResources } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async({params}) => {
  const {keyword} = params
  // Mengubah karakter URL encoded (misalnya %20, %3A, %2F, dll) menjadi teks aslinya yang mudah dibaca.
  const decodeKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResources("anime", `q=${decodeKeyword}`)
  return (
    <div>
      <section>     
        <Header title={`Pencarian untuk ${decodeKeyword}`}/>
        {/* Mengirim data API ke AnimeList */}
        <AnimeList api={searchAnime}/> 
      </section>
    </div>
  )
}

export default Page