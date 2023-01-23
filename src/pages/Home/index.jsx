import './index.scss'
import MainHeading from "../../components/MainHeading";

import headingBackground from './heading_bg.png'
import Thumb from "../../components/Thumb";
import {useEffect, useState} from "react";
import Pagination from "../../components/Pagination";
import {useParams} from "react-router-dom";

function Home() {
    let { page } = useParams();
    const [apartments, setApartments] = useState([])
    const [nbPages, setNbPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(!isNaN(parseInt(page)) || parseInt(page) > nbPages ? page-1 : 0)
    const [currentApartments,setCurrentApartments] = useState([])

    const resultPerPage = 6;

    useEffect(() => {
        const firstApartment = currentPage*resultPerPage
        const lastApartment = (currentPage+1) * resultPerPage
        setCurrentApartments(apartments.slice(firstApartment, lastApartment))
        window.history.replaceState(null, '', `/${currentPage+1}`);

    }, [currentPage, apartments])

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
                    let nbPages = Math.floor(result.length/resultPerPage)
                    if(result.length % resultPerPage !== 0) {
                        nbPages = nbPages+1
                    }
                    setNbPages(nbPages)
                })
        }

    }, [apartments])

    return (
        <main className={"home"}>
            <MainHeading img={headingBackground} altText={"Panoramique de mer et falaises"}>Chez vous, partout et ailleurs</MainHeading>
            <Pagination currentPage={currentPage} nbPages={nbPages} setCurrentPage={setCurrentPage}/>
            <section className={"thumb_list"}>
                {currentApartments.map((apartment) => (<Thumb key={apartment.id} title={apartment.title} image={apartment.cover} altText={apartment.title} id={apartment.id}/>))}
            </section>
            <Pagination currentPage={currentPage} nbPages={nbPages} setCurrentPage={setCurrentPage}/>
        </main>
    )
}

export default Home