import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

const urlBase = "https://rickandmortyapi.com/api/character"

const Detail = () => {

    const [personDetail, setPersonDetail] = useState(null)

    const { theid } = useParams()
    const navigation = useNavigate()

    const getDetailPerson = async () => {
        try {
            const response = await fetch(`${urlBase}/${theid}`)
            const data = await response.json()
            setPersonDetail(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetailPerson()
    }, [])

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-7">
                    <div className="card">
                        <img src={personDetail?.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{personDetail?.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div onClick={() => navigation(-1)} className="btn btn-primary">Go back</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;