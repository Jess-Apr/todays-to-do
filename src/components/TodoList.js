import React, { useState, useEffect } from "react";
import todoData from "../static/todoData";
import TodoItems from "./TodoItems.js";
import shortid from 'shortid';
import '../css/TodoList.css';

export default function TodoList() {
    const [todos, setTodos] = useState(todoData);
    const [content, setContent] = useState("");
    const [editContent, setEditContent] = useState("");

    useEffect(() => {
        const localTodos = localStorage.getItem('todos');
        console.log(localTodos, JSON.parse(localTodos));
        if (localTodos) {
            setTodos(JSON.parse(localTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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
        <div className="todolist__container">
            <div className="todolist__title">Today's To-Do List</div>
            <div className="todolist__input-container">
                <input className="todolist__input" placeholder="오늘의 할 일을 적어주세요." type="text" value={ content } onChange={ handleInputChange } onKeyDown={ handleOnKeyDown }></input>
                <button className="todolist__submit-btn"><i className="fa-solid fa-check" onClick={ submitContent }></i></button>
            </div>
            <ul>
                {todos.map((todo) => {
                    return <TodoItems todo={ todo } key={ todo.id } editContent={ editContent } handleSubmitContent={ handleSubmitContent } handleEditSubmit={ handleEditSubmit } handleDelete={ () => handleDelete(todo.id) } />
                })}
            </ul>
        </div>
    )
}