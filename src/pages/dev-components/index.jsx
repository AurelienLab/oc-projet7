import Tag from '../../components/Tag'
import Thumb from "../../components/Thumb";
import Dropdown from "../../components/Dropdown";
import Carousel from "../../components/Carousel";

function DevComponents() {
    return (
        <>
            <p>.TAG</p>
            <Tag name={"Tag name"} />
            <br/>
            <br/>
            <p>.Thumb</p>
            <Thumb title={"Titre de la location"} />
            <br/>
            <br/>
            <br/>
            <Dropdown title={"Fiabilité"} content={['Climatisation', 'Wi-fi', 'Cuisine']}/>
            <Dropdown title={"Respect"} size={"large"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
            <br/>
            <br/>
            <br/>
            <Carousel images={[
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
            ]}/>

        </>
    )
}

export default DevComponents