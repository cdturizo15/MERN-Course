import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const SearchInput = () => {

    const navigate = useNavigate()
    const { searchText, handleInputChange } = useForm({
        searchText: ''
    })
    const onSubmit = () => {
        event.preventDefault()
        navigate(`/search/${searchText}`)
        
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='container d-flex mt-3'>
                <input onChange={handleInputChange} name="searchText" className='input-style' type="text" placeholder='Search...' />
                <button className='btn btn-dark ms-3'>Search</button>
            </div>
        </form>
    )
}
