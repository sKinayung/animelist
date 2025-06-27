// Mengimpor komponen AnimeList dari file animeList.js (atau .tsx) yang berada di direktori: app/components
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async({params}) => {
    const {keyword} = params
  // Fetching data pada enpoint yang ada di file.env
  // await: Menunggu respons fetch selesai, karena fetch adalah operasi asynchronous (berjalan di latar belakang). Harus digunakan di dalam async function.
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  // response.json(): Mengambil isi respons dari fetch dan mengubahnya menjadi objek JavaScript dari format JSON.
  const searchAnime = await response.json()

  return (
    <div>
      <section>     
        <Header title={`Pencarian untuk ${keyword}`}/>
        {/* Mengirim data API ke AnimeList */}
        <AnimeList api={searchAnime}/> 
      </section>
    </div>
  )
}

export default Page