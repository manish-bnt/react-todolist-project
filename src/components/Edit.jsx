import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import "../components/Edit.css";

export default function Edit() {
  const {editHandler, todo, setTodo, editId, setEdit, userEdit,setUserEdit } =
    useContext(TodoContext);

  const inputHandler = (e) => {
    setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        saveHandler(e);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [userEdit]);

  const saveHandler = () => {
    const oldTodo = todo[editId];

    const updateTodoItem = {
      title: userEdit.title.trim() === "" ? oldTodo.title : userEdit.title,
      desc: userEdit.desc.trim() === "" ? oldTodo.desc : userEdit.desc,
    };
    const updatedTodo = todo.toSpliced(editId, 1, updateTodoItem);

    setTodo(updatedTodo);
    localStorage.setItem("userTodoList", JSON.stringify(updatedTodo));
    setUserEdit({
      title: "",
      desc: "",
    });
    setEdit((prev) => !prev);
    console.log(editId);
  };
  return (
    <div className="edit-container">
      <i onClick={editHandler} className="fa-solid fa-xmark cross-icon"></i>
      <h2>Edit Your Task</h2>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Task"
          name="title"
          value={userEdit.title}
          onChange={inputHandler}
        />

        <textarea
          id="desc"
          name="desc"
          value={userEdit.desc}
          onChange={inputHandler}
          rows={5}
          cols={30}
          placeholder="Description"
        ></textarea>
      </div>
      <button className="save-btn" onClick={saveHandler}>
        Save
      </button>
    </div>
  );
}
