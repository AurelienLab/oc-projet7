import './index.scss'

function Thumb({title, image, altText}) {
    return (
        <article className={"thumb"}>
            <img src={image} alt={altText}/>
            <div className={"overlay"}/>
            <h2>{title}</h2>
        </article>
    )
}

export default Thumb