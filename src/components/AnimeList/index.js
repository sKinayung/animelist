// Agar bisa menggunakan tag <Image di Next.js, maka impor komponen tersebut terlebih dahulu 
import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 py-2">
            {api.data.map((anime) => {
                return (
                    <Link key={anime.mal_id} href={`/${anime.mal_id}`} className="cursor-pointer bg-[#1f1f1f] text-[#eeeeee] hover:text-amber-300 transition-all" >
                        <Image src= {anime.images.webp.image_url} alt="..." width={350} height={350}/>
                        {/* Judul pada anime sudah responsive di berbagai jenis device */}
                        <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>

    )
}

// Menandai sebuah fungsi sebagai ekspor utama (default) dari suatu file, agar bisa digunakan di file lain dengan import.
export default AnimeList