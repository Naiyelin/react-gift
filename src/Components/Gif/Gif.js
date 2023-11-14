import React from 'react'
import './styles.css'
function Gif({ id, title, url }) {
    return (
        <figure id={id} className='img'>
            {/* <h3 className='title'>{title}</h3> */}
            <img
                src={url}
                alt={title}
                title={title}
            />
        </figure>
    )
}

export { Gif }