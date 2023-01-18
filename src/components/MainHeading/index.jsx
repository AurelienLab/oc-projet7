import './index.scss'

function MainHeading({img, altText, children}) {
    return (
        <div className={"main__heading"}>
            <img src={img} alt={altText}/>
            <h1>{children}</h1>
        </div>
    )
}

export default MainHeading