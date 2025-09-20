import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import "./AddTodo.css";
export default function TodoList() {
  const { setAdd, todo, setTodo } = useContext(TodoContext);
  const [input, setInput] = useState({
    title: "",
    desc: "",
    isFav: false,
  });
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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
  }, [input]);

  const saveHandler = (e) => {
    e.preventDefault();
    if (input.title.trim() === "" || input.desc.trim() === "") {
      alert("Title and Description cannot be empty!");
      return;
    }
    const updatedTodo = [...todo, input];
    setTodo(updatedTodo);
    console.log(updatedTodo);
    localStorage.setItem("userTodoList", JSON.stringify(updatedTodo));
    setInput({
      title: "",
      desc: "",
    });
    setAdd((prev) => !prev);
  };

  const declineHandler = (e) => {
    e.preventDefault();
    setAdd(false);
  };
  return (
    <>
      <div className="head-container">
        <i onClick={declineHandler} className="fa-solid fa-xmark"></i>
        <h2>Add Your Task</h2>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Your Task"
            name="title"
            value={input.title}
            onChange={inputHandler}
          />

          <textarea
            name="desc"
            value={input.desc}
            id="desc"
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
    </>
  );
}
