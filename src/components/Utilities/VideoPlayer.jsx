"use client"

import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoPlayer}
                    className="text-[#1f1f1f] float-right bg-white px-3 mb-1 font-bold cursor-pointer"
                >
                    X
                </button>
                <Youtube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is broken, please try another.")}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button
                onClick={handleVideoPlayer}
                className="rounded fixed bottom-5 right-5 w-32 bg-white text-[#1f1f1f] text-xl font-bold hover:bg-amber-300 transition-all shadow-xl cursor-pointer"
            >
                Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenPlayer/>
}

export default VideoPlayer