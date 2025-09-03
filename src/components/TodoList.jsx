import React, { useContext } from "react";
import Edit from "./Edit";
import AddTodo from "./AddTodo";
import { TodoContext } from "../Context/TodoContext";
import TodoCard from "../components/TodoCard";
import "../components/TodoList.css";
import "../App.css";
export default function TodoList() {
  const { add, todo, edit, openMenu, menuHandler } = useContext(TodoContext);

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
            fontSize: "clamp(1rem, 1vw + 1rem, 2rem)",
          }}
        >
          All Tasks
        </h1>
        <div className="display-todo">
          {todo.map((todo, id) => {
            return <TodoCard key={id} todoVal={todo} todoId={id} />;
          })}
          {edit && <Edit />}
          {add && <AddTodo />}
        </div>
      </div>
    </>
  );
}
