import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        user: "Necros",
        email: "necros@dragon.com"
    })

    const { user, email} = formState

    const handleInputChange = ({target}) =>{
        const {name, value} = target
        setFormState({...formState, [name]: value})
    }

    
  return (
    <>
        <h1>Formulario</h1>
        <hr />
        <input onChange={handleInputChange} value={user} type="text" className='form-control mb-3' placeholder='User' name='user' />
        <input onChange={handleInputChange} value={email} type="email" className='form-control mb-3' placeholder='Email' name='email' />

        {
            (user==="Necros2")&& <Message/>
        }
    </>
    
  )
}
