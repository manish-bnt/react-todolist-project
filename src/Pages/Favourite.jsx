import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import TodoCard from "../components/TodoCard";
import Edit from "../components/Edit";
import AddTodo from "../components/AddTodo";
import "../App.css";

export default function Favourite() {
  const { todo, edit, add, openMenu } = useContext(TodoContext);
  return (
    <>
      <div className={`todo-container ${openMenu ? "active" : ""}`}>
        <h1
          style={{
            textAlign: "center",
            color: "rgba(0,0,0,0.8)",
            fontFamily: "Segoe UI",
            fontWeight: "500",
            marginTop: "1rem",
          }}
        >
          Favourites
        </h1>
        <div className="display-todo">
          {todo.map(
            (v, i) => v.isFav && <TodoCard key={i} todoVal={v} todoId={i} />
          )}
          {edit && <Edit />}
          {add && <AddTodo />}
        </div>
      </div>
    </>
  );
}
