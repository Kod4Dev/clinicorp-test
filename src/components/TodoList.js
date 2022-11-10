import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ todos,setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo text={todo.text} key={todo.id} completed={todo.completed} todos={todos} setTodos={setTodos} todo={todo} />
                ))}
            </ul>
        </div>
    )
}