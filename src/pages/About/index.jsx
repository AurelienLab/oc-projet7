import MainHeading from "../../components/MainHeading";

import headingBackground from './heading_bg.png'
import Dropdown from "../../components/Dropdown";

function About() {
    return (
        <main className={"about"}>
            <MainHeading img={headingBackground} altText={"Décors de montagnes enneigées"}/>
            <div className={"dropdowns"}>
                <Dropdown title={"Fiabilité"} size={"large"} />
                <Dropdown title={"Respect"}
                          size={"large"}
                          defaultOpen={true}
                          content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
                          />
                <Dropdown title={"Service"} size={"large"} />
                <Dropdown title={"Responsabilité"} size={"large"} />
            </div>
        </main>
    )
}

export default About