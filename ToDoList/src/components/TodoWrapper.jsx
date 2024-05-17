import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from './EditTodoForm';
uuidv4()

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
 
    const addTodo = todo => {
        setTodos([...todos, {
            id: uuidv4(), task: todo,
            completed: false, isEditing: false
        }])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    } 

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing
        } : todo
        ))
    }

    return (
        <div className='p-4 max-w-xl mx-auto bg-indigo-800 rounded shadow'>
            <h1 className='text-3xl font-bold text-center mb-8 text-white'>To Do List</h1>
            <TodoForm addTodo={addTodo} />
            <div className='space-y-4'>
                {todos.map((todo) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
                    ) : (
                        <Todo  
                            task={todo}
                            key={todo.id}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    )
                ))}
            </div>
        </div>
    )
}
