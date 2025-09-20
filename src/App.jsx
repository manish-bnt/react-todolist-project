import { createContext, useContext, useState } from "react";
// import Todo from "./Todo";
import AddBtn from "./components/AddBtn";
import Nav from "./Pages/Nav";
import { Outlet } from "react-router-dom";
import { TodoContext } from "./Context/TodoContext";
import "./App.css";

function App() {
  const { add, edit, menuHandler } = useContext(TodoContext);
  return (
    <>
      <nav>
        <div className="hamburger-container" onClick={menuHandler}>
          <i className="fa-solid fa-bars hamburger"></i>
        </div>
        <div className="heading">
          <h1>Todo List</h1>
        </div>
      </nav>
      <div className={`${add || edit ? "overlay" : ""}`}></div>
      <main>
        <AddBtn />
        <Nav />
        <Outlet />
      </main>
    </>
  );
}

export default App;
