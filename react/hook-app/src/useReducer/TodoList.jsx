import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleDelete, onToggleTodo}) => {
  return (
    <>
        <ul className='list-group'>
                {todos.map(todo=>(
                    <TodoItem onToggleTodo={onToggleTodo} key={todo.id} handleDelete={handleDelete} todo={todo}/>
                ))}
                
        </ul>
    </>
  )
}
