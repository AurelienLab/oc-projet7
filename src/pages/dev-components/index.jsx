import Tag from '../../components/Tag'
import Thumb from "../../components/Thumb";
import Dropdown from "../../components/Dropdown";

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
        </>
    )
}

export default DevComponents