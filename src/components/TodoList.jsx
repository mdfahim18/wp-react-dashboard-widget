import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

function TodoList({ todos, handleAddTodo, handleDeleteTodo, toggleTodo }) {
  return (
    <section>
      <AddTodo handleAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </section>
  );
}

export default TodoList;
