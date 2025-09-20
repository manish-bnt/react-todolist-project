import React, { useContext, useState } from "react";
import "../components/AddBtn.css";
import { TodoContext } from "../Context/TodoContext";
export default function AddBtn() {
  const { addHandler } = useContext(TodoContext);

  return (
    <div onClick={addHandler} className="add-button-wrap">
      <i className="fa-solid fa-plus addIcon"></i>
    </div>
  );
}
