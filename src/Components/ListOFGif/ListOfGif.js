import React, { useState, useEffect } from 'react'
import { Gif } from "../Gif/Gif";
import { getGifs } from "../../services/getGifs";

function ListOfGif({ params }) {
    const { keyword } = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getGifs({
            keyword,
            limit: 12,
        })
            .then((gifs) => {
                gifs.length === 0 && setError(true)
                setGifs(gifs)
                setLoading(false)
            })
            .catch((error) => {
                setError(error);
            })
    }, [keyword])

    if(loading){
        return <h3>Cargando</h3>
    }
    if(error){
        return <h3>No hay resultados</h3>
    }

    return (
        <>
            {
                gifs?.map(({ id, title, url }) => (
                    <Gif
                        id={id}
                        /* title={title} */
                        key={id}
                        url={url}
                    />
                ))
            }
        </>
    )
}

export { ListOfGif }