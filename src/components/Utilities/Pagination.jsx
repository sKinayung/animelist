const Pagination = ({page, lastPage, setPage}) => {
    const scrollTop = () => {
        scrollTo ({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop ()
    }
    const handlePrevPage = () => {
        if (page>1) {
            setPage((prevState) => prevState - 1)
            scrollTop ()
        }
    }

    return (
        <>
            <div className="flex justify-center items-center p-4 gap-3 text-white font-bold text-3xl">
                <button className="transition-all hover:text-amber-300 cursor-pointer" onClick={handlePrevPage}>Prev</button>
                <p>{page} of {lastPage}</p>
                <button className="transition-all hover:text-amber-300 cursor-pointer" onClick={handleNextPage}>Next</button>
            </div>
        </>
    )
}

export default Pagination