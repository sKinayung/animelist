// Agar bisa menggunakan tag <Image di Next.js, maka impor komponen tersebut terlebih dahulu 
import Image from "next/image"
import Link from "next/link"

const AnimeList = ({title, images, id}) => {
    return (
        <Link href={`/${id}`} className="cursor-pointer">
            <Image src= {images} alt="..." width={350} height={350}/>
            {/* Judul pada anime sudah responsive di berbagai jenis device */}
            <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
        </Link>
    )
}

// Menandai sebuah fungsi sebagai ekspor utama (default) dari suatu file, agar bisa digunakan di file lain dengan import.
export default AnimeList