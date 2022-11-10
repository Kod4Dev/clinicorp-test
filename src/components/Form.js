import React from 'react';

export const Form = ({ setInput, todos, setTodos, input, setStatus }) => {

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: input, completed: false, id: Math.random()*1000}
        ]);
        setInput("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input 
                onChange={inputHandler} 
                value={input} 
                type="text"
                className="todo-input"  
            />
            <button className="todo-button" type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}