import React from "react";
import {AiFillCheckSquare } from 'react-icons/ai'
import { IoIosTrash } from 'react-icons/io'



const Todo = ({text,todo, todos, setTodos}) =>{
    //events
    const deleteHandler = () =>{
        setTodos(todos.filter(el => el.id!== todo.id))
    }

    const completeHandler = () =>{
        setTodos(todos.map((item) =>{
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
                
            } return item;
            
        }))
    }



    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={completeHandler}><AiFillCheckSquare /></button>
            <button onClick={deleteHandler}><IoIosTrash /></button>
        </div>
    )
}
export default Todo;