
import { Gifs } from './Gifs';
import { useFetchGifs } from '../Hooks/useFetchGifs';


export const GifGrid = ({category}) =>{

    const {images, isLoading} = useFetchGifs (category)

    
    return (
        <>
        {
            isLoading 
            ? (<img src='spinner'></img>)
            : null
        }     
        {images==[]
        ? <h1>No se encontraron resultados :(</h1>
        :images.map((img) => (
            <Gifs {...img} key={img.id}/>
        ))}
         
        </>
        
    )
}