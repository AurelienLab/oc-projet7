import './index.scss'
import MainHeading from "../../components/MainHeading";

import headingBackground from './heading_bg.png'
import Thumb from "../../components/Thumb";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Home() {
    const [apartments, setApartments] = useState([])

    useEffect(() => {
        if(apartments.length === 0) {
            fetch('./data/apartments.json')
                .then((res) => {
                    if(res.ok) {
                        return res.json()
                    }
                })
                .then((result) => {
                    setApartments(result)
                })
        }

    }, [])

    return (
        <main className={"home"}>
            <MainHeading img={headingBackground} altText={"Panoramique de mer et falaises"}>Chez vous, partout et ailleurs</MainHeading>
            <section className={"thumb_list"}>
                {apartments.map((apartment) => (<Thumb key={apartment.id} title={apartment.title} image={apartment.cover} altText={apartment.title} id={apartment.id}/>))}
            </section>
        </main>
    )
}

export default Home