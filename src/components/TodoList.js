import React, { useState } from "react";
import todoData from "../static/todoData";
import TodoItems from "./TodoItems.js";
import shortid from 'shortid';
import '../css/TodoList.css';

export default function TodoList() {
    const [todos, setTodos] = useState(todoData);
    const [content, setContent] = useState("");
    const [editContent, setEditContent] = useState("");

    const handleInputChange = (e) => {
        setContent(e.target.value);
    }

    const submitContent = (e) => {
        if (content === "") {
            alert("내용을 적어주세요.")
        } else {
            setTodos([...todos, {
                id: shortid.generate(),
                content: content
            }]);
    
            setContent("");
        }
    }

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            submitContent();
            return;
        }
    }

    const handleSubmitContent = (e) => {
        setEditContent(e.target.value);
    }

    const handleEditSubmit = (id) => {
        if (editContent === "") {
            alert("내용을 적어주세요.")
        } else {
            setTodos(todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        content: editContent
                    };
                }
                return todo;
            }));
            
            setEditContent("");
        }
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(el => el.id !== id));
    }

    return (
        <div>
            <div>
                <input type="text" value={ content } onChange={ handleInputChange } onKeyDown={ handleOnKeyDown }></input>
                <button><i className="fa-solid fa-check" onClick={ submitContent }></i></button>
            </div>
            <ul>
                {todos.map((todo) => {
                    return <TodoItems todo={ todo } key={ todo.id } editContent={ editContent } handleSubmitContent={ handleSubmitContent } handleEditSubmit={ handleEditSubmit } handleDelete={ () => handleDelete(todo.id) } />
                })}
            </ul>
        </div>
    )
}