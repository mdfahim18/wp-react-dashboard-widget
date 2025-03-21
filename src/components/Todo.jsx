import React from 'react';

function Todo({ todo, handleDeleteTodo, toggleTodo }) {
  const { id, text, date } = todo;
  return (
    <div>
      <span>{text}</span>
      <div>
        <small>{date}</small>
        <button
          onClick={() => {
            handleDeleteTodo(id);
          }}
        >
          Delete Todo
        </button>

        <button
          onClick={() => {
            toggleTodo(id);
          }}
        >
          Toggle Todo
        </button>
      </div>
    </div>
  );
}

export default Todo;
