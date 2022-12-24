import { useState } from "react"
import { AddCategory } from './AddCategory';
import { GifGrid } from "./GifGrid";

export const Giftonic = () =>{
    const [categories, setCategories] = useState(['gifs'])
    const newCategory = (value)=>{
        if(value.trim().length <= 1) return;
        if( categories.includes(value) )return;
        setCategories([value,...categories])
        
    }
    const handleErase = (key)=>{
        const newCategories = categories.filter(cat => cat!= key)
        setCategories(newCategories)
    }
    const handleSearch = (key)=>{
        const newCategories = categories.filter(cat => cat!= key)
        setCategories(key, ...newCategories)
    }
    return(
        <div className="main-container">
            <h1>Giftonic</h1>
            <AddCategory setCategories= {newCategory} />
            <p className="recent-search-title">Recent searchs:</p>
            <div className="container-categories">
            {categories.map(cat=>(
                <p className="category" key={cat}><span onClick={()=>handleSearch(cat)} className="category-span">{cat}</span><i onClick={()=>handleErase(cat)} className="remove-icon">x</i></p>
                                
            ))}
            </div>
            <div className="gifs-container">
            {categories.map((category) =>{

                return (
                    <GifGrid category={category} key={category}/>
                )
            })}
            </div>
                      
        </div>
    )
}
