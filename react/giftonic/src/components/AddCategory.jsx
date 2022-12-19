import { useState } from "react"

export const AddCategory = ({setCategories})=>{
    const [input, setInput] = useState('');
    const handleChange = () =>{
        event.preventDefault();
        setCategories(input.toLowerCase())    }
    return(
        <div className="container">
            <form onSubmit={handleChange}>
                <input onChange={(e)=> setInput(e.target.value)} placeholder="Buscar gif" className="input" type="text" />            </form>   
        </div>
    )
}