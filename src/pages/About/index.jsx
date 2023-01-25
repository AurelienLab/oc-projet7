import './index.scss'

import MainHeading from "../../components/MainHeading";
import Dropdown from "../../components/Dropdown";

import headingBackground from './heading_bg.png'
import {useDocumentTitle} from "../../utils/hooks";

function About() {
    useDocumentTitle('A propos')
    return (
        <main className={"about"}>
            <MainHeading img={headingBackground} altText={"Décors de montagnes enneigées"}/>
            <div className={"dropdowns"}>
                <Dropdown title={"Fiabilité"}
                          size={"large"}
                          content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}
                />
                <Dropdown title={"Respect"}
                          size={"large"}
                          content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
                          />
                <Dropdown title={"Service"}
                          size={"large"}
                          content={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
                />
                <Dropdown title={"Responsabilité"}
                          size={"large"}
                          content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
                />
            </div>
        </main>
    )
}

export default About