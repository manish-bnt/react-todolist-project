import React, { act, useContext, useReducer } from "react";

export const initialState = {
  addTodoForm: false,
  editTodoForm: false,
  todoIndex: null, //access todoIndex
  updateTodo: {
    title: "",
    desc: "",
  },
  menuBar: false,
};

export default function TodoReducer(state, action) {
  switch (action.type) {
    case "toggle_addTodoForm":
      return { ...state, addTodoForm: !state.addTodoForm };

    case "toggle_editTodoForm":
      return { ...state, editTodoForm: !state.editTodoForm };

    case "set_todo_index":
      return { ...state, todoIndex: action.payload.todoIndex };

    case "update_todo":
      return {
        ...state,
        updateTodo: {
          title: action.payload.title ?? state.updateTodo.title,
          desc: action.payload.desc ?? state.updateTodo.desc,
        },
      };

    case "toggle_menuBar":
      return { ...state, menuBar: !state.menuBar };

    default:
      return state;
  }
}
