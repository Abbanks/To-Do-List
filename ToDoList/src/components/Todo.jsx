import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='flex items-center justify-between p-3 border rounded-lg bg-white mt-8'>
            <p onClick={() => toggleComplete(task.id)}
                className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.task}
            </p>
            <div className='flex space-x-2'>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className='cursor-pointer text-blue-500' />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className='cursor-pointer text-red-500' />
            </div>
        </div>
    )
}
