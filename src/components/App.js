import React from 'react';
import "../styles/App.css";
import TodoList from '../components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;
