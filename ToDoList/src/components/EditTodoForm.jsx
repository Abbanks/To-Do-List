import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("")
    }

    return (
        <form className='flex flex-col space-y-2' onSubmit={handleSubmit}>
            <input
                type="text"
                className='p-2 border rounded w-full mt-8'
                value={value}
                placeholder='Update Task'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='p-2 bg-green-500 text-white rounded'>
                Update Task
            </button>
        </form>
    )
}
