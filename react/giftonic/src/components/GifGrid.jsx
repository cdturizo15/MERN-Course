
import { Gifs } from './Gifs';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import PropTypes from 'prop-types'


export const GifGrid = ({category}) =>{

    const {images, isLoading} = useFetchGifs (category)
    
    return (
        <>
        {
            isLoading && <h1>Is loading...</h1>
        }     
        {

        images.map((img) => (
            <Gifs {...img} key={img.id}/>
        ))
        
        }
         
        </>
        
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}