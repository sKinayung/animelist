export const getAnimeResources = async (resource, query) => {
    // Fetching data pada enpoint yang ada di file.env
    // await: Menunggu respons fetch selesai, karena fetch adalah operasi asynchronous (berjalan di latar belakang). Harus digunakan di dalam async function.
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    // response.json(): Mengambil isi respons dari fetch dan mengubahnya menjadi objek JavaScript dari format JSON.
    const anime = await response.json()
    return anime
}

export const getNestedAnimeRecommendation = async (resource, objectProperty) => {
    const response = await getAnimeResources (resource)
    return response.data.flatMap(item => item.entry)
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random()*(data.length - gap)+1) 
    const last = first + gap

    const response = {
        data : data.slice(first, last)
    }
    return response
}