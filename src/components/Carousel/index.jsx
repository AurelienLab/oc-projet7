import './index.scss'
import {useEffect, useState} from "react";

import chevron from './chevron.svg'

function Carousel({images}) {
    const [currentImage, setCurrentImage] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [intervalId, setIntervalId] = useState(null)

    const goPrevious = () => {
        const newIndex = currentImage === 0 ? images.length-1 : currentImage-1
        setCurrentImage(newIndex)
    }

    const goNext = () => {
        const newIndex = currentImage === images.length-1 ? 0 : currentImage+1
        setCurrentImage(newIndex)
    }

    // useEffect(() => {
    //     return setIntervalId(setInterval(goNext, 3000))
    // }, [])
    //
    // useEffect(() => {
    //     if(!isPaused) return setIntervalId(setInterval(goNext, 3000))
    //     else return clearInterval(intervalId)
    //
    // }, [isPaused])


    return (
        <div className={`carousel`} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {images.map((url, index) => {
                let imageClass;

                if(index === currentImage) {
                    imageClass = "currentImg"
                }
                else {
                    //Cas géneraux
                    if(index > currentImage) {
                        imageClass = "nextImg"
                    }
                    else if((index < currentImage) ) {
                        imageClass = "previousImg"
                    }

                    //Cas particuliers
                    if(currentImage === images.length-1 && index === 0) {
                        imageClass = "nextImg"
                    }
                    else if(currentImage === 0 && index === images.length-1) {
                        imageClass = "previousImg"
                    }
                }

                return(<img src={url} className={`carousel__item ${imageClass}`} />)
            })}
            {images.length > 1 &&
                <>
                    <span className={"arrow next"} onClick={goNext}><img src={chevron}/></span>
                    <span className={"arrow previous"} onClick={goPrevious} ><img src={chevron}/></span>
                    <span className={"index"}>{currentImage+1}/{images.length}</span>
                </>


            }

        </div>
    )
}

export default Carousel