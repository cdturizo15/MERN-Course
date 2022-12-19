import { useEffect, useState } from "react"
import { getGifs } from "../services/getGifs"

export const useFetchGifs = (category)=>{
    const [images, setimages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
 
    const getImages = async()=>{
        const images = await getGifs(category)
        setimages(images)
        setIsLoading(false)
    }

    useEffect( ()=> {
        getImages();
    }, [])
    return {
        images,
        isLoading: false
    }
}