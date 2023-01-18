import './index.scss'
import {useState} from "react";

import chevron from './chevron.svg'

function Carousel({images}) {
    const [currentImage, setCurrentImage] = useState(0)

    const goPrevious = () => {
        const newIndex = currentImage === 0 ? images.length-1 : currentImage-1
        setCurrentImage(newIndex)
    }

    const goNext = () => {
        const newIndex = currentImage === images.length-1 ? 0 : currentImage+1
        setCurrentImage(newIndex)
    }

    return (
        <div className={`carousel`}>
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
            <span className={"arrow next"} onClick={goNext} ><img src={chevron}/></span>
            <span className={"arrow previous"} onClick={goPrevious} ><img src={chevron}/></span>
            <span className={"index"}>{currentImage+1}/{images.length}</span>
        </div>
    )
}

export default Carousel