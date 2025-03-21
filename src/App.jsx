import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

const getLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const myTodos = [
  {
    id: 1,
    text: 'This is todo 1',
    date: '1/1/2025',
    completed: false,
  },
  {
    id: 2,
    text: 'This is todo 2',
    date: '1/1/2025',
    completed: false,
  },
  {
    id: 3,
    text: 'This is todo 3',
    date: '1/1/2025',
    completed: true,
  },
];
function App() {
  const [todos, setTodos] = useState(() => {
    const saved = getLocalStorage();
    return saved.length > 0 ? saved : myTodos;
  });

  const handleAddTodo = (text) => {
    const id = new Date().getTime();
    const date = new Date().toLocaleDateString();
    const newTodo = {
      id: id,
      text: text,
      date: date,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <main>
      <TodoList
        todos={todos}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        toggleTodo={toggleTodo}
      />
    </main>
  );
}

export default App;
