import React, {useState} from "react";
import {BsFillPencilFill, BsFillTrashFill} from 'react-icons/bs'
import { FaCheck} from 'react-icons/fa'

export const Todo = ({ text, todo, todos, setTodos }) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState("")

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, 
                    completed: !item.completed
                }
            }
            return item;
        }))
        console.log(todos)
    }

    const inputHandler = (e) => {
        setNewTitle(e.target.value);
    }

    const editHandler = () => {
        setNewTitle("")
        setEdit(false)
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, 
                    text: newTitle
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <FaCheck />
            </button>
            <button className="edit-btn" onClick={() => setEdit(true)}>
                <BsFillPencilFill />
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <BsFillTrashFill />
            </button>
            {
                edit ? 
                <div className="edit-div">
                    <input 
                        onChange={inputHandler}
                        value={newTitle}
                        type="text"
                        className="todo-input-edit"  
                    />
                    <button className="todo-button" type="submit" onClick={editHandler}>
                        <i className="fas fa-plus-square"></i>
                    </button>
                </div>: ""
            }
        </div>
    )
}