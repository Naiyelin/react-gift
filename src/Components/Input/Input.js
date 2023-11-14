import React from 'react'

function Input({ searchGif, keyword }) {
    return (
        <input
            type='text'
            className="input"
            onChange={searchGif}
            value={keyword}
            placeholder="Busca tu GIF"
        />
    )
}

export { Input }