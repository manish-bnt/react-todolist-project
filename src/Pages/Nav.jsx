import React, { useContext, useEffect, useRef } from "react";
import "../Pages/Nav.css";
import { Link } from "react-router-dom";
import { TodoContext } from "../Context/TodoContext";
export default function Nav() {
  const { addHandler, openMenu, setOpenMenu } = useContext(TodoContext);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && navRef.current.contains(e.target)) {
        return;
      }
      setOpenMenu(false);
    };

    if (openMenu) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openMenu]);

  return (
    <div ref={navRef} className={`nav-container ${openMenu ? "active" : ""}`}>
      <div className="navigation">
        <div onClick={addHandler} className="navigation-add">
          <i
            style={{ color: "#fff", position: "relative", zIndex: "2" }}
            className="fa-solid fa-plus"
          ></i>
          <span>Add</span>
        </div>
        <Link className="link-style" to="/">
          All Tasks
        </Link>
        <Link className="link-style" to="/favourites">
          Favourites
        </Link>
      </div>
    </div>
  );
}
