import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("")
    }

    return (
        <form className='flex flex-col space-y-2' onSubmit={handleSubmit}>
            <input
                type="text"
                className='p-2 border rounded w-full mt-8'
                value={value}
                placeholder='What is your task today?'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='p-2 bg-blue-500 text-white rounded'>
                Add Task
            </button>
        </form>
    )
}
