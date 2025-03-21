import React, { useState } from 'react';

function AddTodo({ handleAddTodo }) {
  const [todoText, setTodoText] = useState('');
  const characterLimit = 150;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setTodoText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (todoText.trim().length > 0) {
      handleAddTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <div>
      <textarea
        name=''
        id=''
        value={todoText}
        onChange={handleChange}
      ></textarea>
      <div>
        <span>{characterLimit - todoText.length} Remaining</span>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}

export default AddTodo;
