import React, { useState } from "react";
import '../css/TodoItems.css';

export default function TodoItems({ todo, editContent, handleSubmitContent, handleEditSubmit, handleDelete }) {
    const [editClicked, setEditClicked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleEdit = () => {
        setEditClicked(true);
    }

    const editSubmit = () => {
        handleEditSubmit(todo.id);
        if (editContent !== "") cancelEdit();
    }

    const cancelEdit = () => {
        setEditClicked(false);
    }

    const handleSubmitEnter = (e) => {
        if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            editSubmit();
        }
    }

    return (
        <li key={todo.id}>
            <div onClick={() => setIsChecked(!isChecked)}>
                {isChecked ? <div className="checkbox-clicked"><i className="fa-solid fa-check"></i></div> : <div className="checkbox-unclicked"></div> }
            </div>
            {editClicked ? (
                <>
                    <input type="text" onChange={ handleSubmitContent } onKeyDown={ handleSubmitEnter }></input>
                    <div>
                        <button onClick={ editSubmit }><i className="fa-solid fa-check"></i></button>
                        <button onClick={ cancelEdit }><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </>
            ) : (
                <>
                    <div className={isChecked ? "text-checked" : "text-unchecked"}>{todo.content}</div>
                    <div>
                        <button onClick={ handleEdit }><i className="fa-regular fa-pen-to-square"></i></button>
                        <button onClick={ handleDelete }><i className="fa-regular fa-trash-can"></i></button>
                    </div>
                </>
            )}
        </li>
    )
}