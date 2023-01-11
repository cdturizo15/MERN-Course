import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
    
    const basicForm = {
        user: "",
        email: '',
        pass: ''
    }

    const {formState, handleInputChange, onResetForm} = useForm(basicForm);

    const {user, email, pass} = formState
    
  return (
    <>
        <h1>Formulario con custom hook</h1>
        <hr />
        <input onChange={handleInputChange} value={user} type="text" className='form-control mb-3' placeholder='User' name='user' />
        <input onChange={handleInputChange} value={email} type="email" className='form-control mb-3' placeholder='Email' name='email' />
        <input onChange={handleInputChange} value={pass} type="password" className='form-control mb-3' placeholder='Password' name='pass' />
        <button onClick={onResetForm} className="btn btn-primary">Borrar</button>
    </>
    
  )
}
