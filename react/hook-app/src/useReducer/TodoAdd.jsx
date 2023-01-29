import React, { useState } from 'react'
import { useForm } from '../hooks'


export const TodoAdd = ({handleSubmit}) => {

    const {formState, handleInputChange, onResetForm} = useForm({
        description:'',
    })

    const {description} = formState

    const newTodo = (submit)=>{
        submit.preventDefault();
        if (description<= 1)  return 
        const newTodo = {
            id: new Date().getTime()*3,
            desc: description,
            done: false
        }
        handleSubmit(newTodo)
        onResetForm()
    }

  return (
    <>
        <form onSubmit={(e)=>newTodo(e)}> 
            <input value={description} name='description' onChange={handleInputChange} type="text" className='form-control' placeholder='Tarea'/>
            <button  type='submit' className='btn btn-primary m-3'>Agregar</button>
        </form>
    </>
  )
}
