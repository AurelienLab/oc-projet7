import './index.scss'
import MainHeading from "../../components/MainHeading";

import headingBackground from './heading_bg.png'
import Thumb from "../../components/Thumb";

function Home() {
    return (
        <main className={"home"}>
            <MainHeading img={headingBackground} altText={"Panoramique de mer et falaises"}>Chez vous, partout et ailleurs</MainHeading>
            <section className={"thumb_list"}>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
                <Thumb title={"Titre de la location"}/>
            </section>
        </main>
    )
}

export default Home