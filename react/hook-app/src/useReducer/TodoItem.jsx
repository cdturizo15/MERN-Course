import React from 'react'

export const TodoItem = ({todo, onToggleTodo, handleDelete}) => {
  return (
    <>
        <li  className='list-group-item '><span aria-label='span' className={`align-self-center ${todo.done && 'text-decoration-line-through'}`} onClick={()=>onToggleTodo(todo.id)}>{todo.desc}</span><button className='btn btn-primary ms-3'>Editar</button><button onClick={()=>handleDelete(todo)} className='btn btn-danger ms-3'>Borrar</button></li>
    </>
  )
}
