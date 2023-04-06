import React from 'react'
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const Gif = ({ category, animeName }) => {


    useEffect(() => {
        const urlImg = getGif(category)
    }, [])

    const [url, setUrl] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const getGif = async (category) => {
        const { results } = await getGifs(category, animeName)
        setUrl(results[0].media_formats.gif.url)
        setIsLoading(false)
    }
    return (
        <div className='container mt-3'>
            {isLoading ? <img className='gif' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' /> : <img src={url} alt={category} />}        </div>
    )
}
