import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({setCategories})=>{
    const [input, setInput] = useState('');
    const handleChange = () =>{
        event.preventDefault();
        setCategories(input.toLowerCase())    }
    return(
        <div className="container">
            <form aria-label="form" onSubmit={handleChange}>
                <input onChange={(e)=> setInput(e.target.value)} placeholder="Buscar gif" className="input" type="text" />            </form>   
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}