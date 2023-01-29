import React from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = ({onNewTodo}) => {

    const {state, handleDelete, handleSubmit, handleToggle} = useTodo()
    
  return (
    <>
        <h1>Todo App</h1>
        <hr />
        <div className='row'>
            <div className='col'>
                <h3>Lista de tareas
                </h3>
                <TodoList onToggleTodo={handleToggle} todos={state} handleDelete={handleDelete}  />
            </div>

            <div className='col'>
                <h3>Agregar tarea</h3>
                <TodoAdd handleSubmit={handleSubmit}/>
            </div>

        </div>
        

    </>
  )
}
