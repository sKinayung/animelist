// Mengimpor komponen AnimeList dari file animeList.js (atau .tsx) yang berada di direktori: app/components
import AnimeList from "@/components/AnimeList"
import Link from "next/link"

const Home = async() => {
  // Fetching data pada enpoint yang ada di file.env
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="font-bold text-2xl">Paling Populer</h1>
        <Link href={"/populer"} className="font-bold md:text-xl text-md hover:text-[#1D427B] transition-all ">Lihat Semua</Link>
      </div>

      {/* Grid cover anime responsive untuk berbagai jenis device */}
      {/* Ketika dimensi layar seperti monitor pc, maka kolom grid akan menjadi 4  */}
      {/* Sedangkan dimensi layar hp, kolom grid akan menjadi 2 */}
      <h1 className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 py-2">  
        {anime.data.map(data => {
          return (
            <div key = {data.mal_id} className="shadow-xl">
              <AnimeList title = {data.title} images = {data.images.webp.image_url} id = {data.mal_id}/>   
            </div>
          )
        })}
      </h1>
    </div>
  )
}

export default Home