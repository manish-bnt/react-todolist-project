import { createContext, StrictMode, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
// import Todo from "./Todo.jsx";
import Favourite from "./Pages/Favourite.jsx";
import { TodoProvider } from "./Context/TodoContext.jsx";
import TodoList from "./components/TodoList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <TodoList />
          </>
        ),
      },

      {
        path: "favourites",
        element: (
          <>
            <Favourite />
          </>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </StrictMode>
);
