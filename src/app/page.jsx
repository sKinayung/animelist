// Mengimpor komponen AnimeList dari file animeList.js (atau .tsx) yang berada di direktori: app/components
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Home = async() => {
  // Fetching data pada enpoint yang ada di file.env
  // await: Menunggu respons fetch selesai, karena fetch adalah operasi asynchronous (berjalan di latar belakang). Harus digunakan di dalam async function.
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // response.json(): Mengambil isi respons dari fetch dan mengubahnya menjadi objek JavaScript dari format JSON.
  const topAnime = await response.json()

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

export default Home