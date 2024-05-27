import React, { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([...JSON.parse(localStorage.getItem('todos'))]);

    // Load todos from localStorage when the component mounts
    useEffect(() => {
        try {
            const storedTodos = JSON.parse(localStorage.getItem('todos'));
            if (Array.isArray(storedTodos)) {
                setTodos(storedTodos);
            }
        } catch (error) {
            console.error("Failed to parse todos from localStorage", error);
        }
    }, []);

    // Save todos to localStorage whenever the todos state changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        setTodos([...todos, {
            id: uuidv4(), task: todo,
            completed: false, isEditing: false
        }]);
    };

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing
        } : todo));
    };

    const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

    return (
        <div className='p-4 max-w-xl mx-auto bg-indigo-800 rounded shadow'>
            <h1 className='text-3xl font-bold text-center mb-8 text-white'>To Do List</h1>
            <TodoForm addTodo={addTodo} />
            <div className='space-y-4'>
                {sortedTodos.map((todo) => (
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
    );
};
