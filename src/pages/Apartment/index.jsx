import './index.scss'

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Error404 from "../404";
import Carousel from "../../components/Carousel";
import Tag from "../../components/Tag";
import Dropdown from "../../components/Dropdown";
import Rating from "../../components/Rating";

function Apartment() {
    const {id} = useParams();
    const [hasError, setHasError] = useState(false)
    const [apartment, setApartment] = useState(null)

    useEffect(() => {
        fetch('/data/apartments.json')
            .then(res => res.ok ? res.json() : setHasError(true))
            .then(data => {
                const result = data.filter((apartment) => apartment.id === id)
                if(result.length !== 1) {
                    return setHasError(true)
                }
                setApartment(result[0])
            })
    }, [])


    return (
        hasError ? <Error404/> : apartment && (
            <main className={"apartment"}>
                <Carousel images={apartment.pictures} />
                <div className={"apartment__informations"}>
                    <div className={"apartment__informations__apartment"}>
                        <h1>{apartment.title}</h1>
                        <address>{apartment.location}</address>
                        <div className={"apartment__taglist"}>
                            {apartment.tags.map((value) => <Tag name={value} key={value}/> )}
                        </div>
                    </div>
                    <div className={"apartment__informations__host"}>
                        <div className={"apartment__host"}>
                            <span>{apartment.host.name.replaceAll(' ', '\n')}</span>
                            <img src={apartment.host.picture} alt={`Photo de profil de ${apartment.host.name}`} className={'apartment__host__picture'}/>
                        </div>
                        <div className={"apartment__rating"}>
                            <Rating value={2}/>
                        </div>
                    </div>
                </div>
                <div className={"apartment__dropdowns"}>
                    <Dropdown content={apartment.description} title={"Description"} defaultOpen={true}/>
                    <Dropdown content={apartment.equipments} title={"Equipements"} defaultOpen={true}/>
                </div>
            </main>
        )
    )
}

export default Apartment