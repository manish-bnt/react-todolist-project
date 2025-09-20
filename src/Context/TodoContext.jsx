import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("userTodoList")) || [
      {
        title:'Buy Groceries',
        desc: 'Purchase milk, bread, and vegetables from the nearby store.',
        isFav: false
      },
      {
        title:'Complete Homework',
        desc: 'Finish math assignment (Chapter 4) before tomorrow’s class.',
        isFav: true
      },
      {
        title:'Workout',
        desc: 'Do a 30-minute morning workout (push-ups, running, stretching).',
        isFav: false
      },
    ]
  );
  const [add, setAdd] = useState(false); // floating add button
  const [editId, setEditId] = useState(null); // access index by clicking edit button
  const [edit, setEdit] = useState(false); // toggle edit component
  const [openMenu,setOpenMenu] = useState(false)
   const [userEdit, setUserEdit] = useState({
    title: "",
    desc: "",
  });
  
  const menuHandler=(e)=> {
    e.stopPropagation(); 
    setOpenMenu((prev) => !prev)
  }

  
  const editHandler = (id) => {
    setEdit((prev) => !prev);
    setUserEdit(todo[id])
    setEditId(id);
  };

  const deleteHandler = (id) => {
    const updateTodo = todo.toSpliced(id, 1);
    localStorage.setItem("userTodoList", JSON.stringify(updateTodo));
    setTodo(updateTodo);
  };
  const addHandler = () => {
    setAdd((prev) => !prev);
    console.log("hi i am activate");
  };

  const favHandler = (index) => {
    const matchedUser = todo.find((val, idx) => idx === index);
    console.log(index);
    console.log(matchedUser);
    if (matchedUser) {
      const favouriteUpdation = { ...matchedUser, isFav: !matchedUser.isFav };
      const todoUpdate = todo.toSpliced(index, 1, favouriteUpdation);
      setTodo(todoUpdate);
      console.log(favouriteUpdation);
      console.log(todoUpdate);

      localStorage.setItem("userTodoList", JSON.stringify(todoUpdate));
    }
  };



  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        add,
        setAdd,
        addHandler,
        edit,
        setEdit,
        editHandler,
        editId,
        deleteHandler,
        favHandler,
        openMenu,
        setOpenMenu,
        menuHandler,
        userEdit,
        setUserEdit,
      }}
    >

      {children}
    </TodoContext.Provider>
  );
}
