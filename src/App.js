import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { useRecoilValue } from 'recoil'
import { filteredTodoListState, todoListState } from './todoAtoms';
import TodoItem from './components/TodoItem';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';
import CurrentUserInfo from './components/CurrentUserInfo';
import React from 'react';

function App() {
  // const todoList = useRecoilValue(todoListState)
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div className="App">
      <React.Suspense fallback={<div>...loading</div>}>
        <CurrentUserInfo />
      </React.Suspense>
      <TodoListStats />
      <TodoItemCreator />
      <TodoListFilters />
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;