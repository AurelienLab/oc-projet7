import './index.scss'
import {Link} from "react-router-dom";

function Thumb({title, image, altText, id}) {
    return (
        <Link to={`appartement/${id}`} className={"thumb"}>
            <article>
                <img src={image} alt={altText}/>
                <div className={"overlay"}/>
                <h2>{title}</h2>
            </article>
        </Link>
    )
}

export default Thumb