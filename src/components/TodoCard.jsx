import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext';
import '../components/TodoCard.css'

export default function TodoCard({todoVal,todoId}) {
  const {favHandler,editHandler,deleteHandler} = useContext(TodoContext)
  return (
    
         <div className="card">
                <div className="title-desc">
                  <h2>{todoVal.title}</h2>
                  <p>{todoVal.desc}</p>
                </div>
                <div className="favourite">
                  <i
                    onClick={()=> favHandler(todoId)}
                  
                    style={{ color: todoVal.isFav && "#FFD700" }}
                    className="fa-solid fa-star fav-star"
                  ></i>
                </div>

              <div className="cta-container">
                <button
                  onClick={() => editHandler(todoId)}
                  className="btn-handler"
                >
                  <i className="fa-solid fa-pen-to-square editIcon"></i>
                </button>
                <button
                  onClick={() => deleteHandler(todoId, todoVal)}
                  className="btn-handler"
                >
                  <i className="fa-solid fa-trash-can deleteIcon"></i>
                </button>
              </div>
            </div>
  )
}
