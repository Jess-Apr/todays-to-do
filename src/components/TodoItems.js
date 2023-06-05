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
        <li className="item__container" key={todo.id}>
            <div onClick={() => setIsChecked(!isChecked)}>
                {isChecked ? <div className="checkbox checkbox-clicked"><i className="fa-solid fa-check"></i></div> : <div className="checkbox checkbox-unclicked"></div> }
            </div>
            {editClicked ? (
                <>
                    <input className="item__edit-input" type="text" onChange={ handleSubmitContent } onKeyDown={ handleSubmitEnter }></input>
                    <div>
                        <button className="item__btn" onClick={ editSubmit }><i className="fa-solid fa-check fa-lg"></i></button>
                        <button className="item__btn" onClick={ cancelEdit }><i className="fa-solid fa-xmark fa-lg"></i></button>
                    </div>
                </>
            ) : (
                <>
                    <div className={isChecked ? "item__text text-checked" : "item__text text-unchecked"}>{todo.content}</div>
                    <div>
                        <button className="item__btn" onClick={ handleEdit }><i className="fa-regular fa-pen-to-square fa-lg"></i></button>
                        <button className="item__btn" onClick={ handleDelete }><i className="fa-regular fa-trash-can fa-lg"></i></button>
                    </div>
                </>
            )}
        </li>
    )
}