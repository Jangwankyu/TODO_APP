import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

import './App.css';

function App() {
/*
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 만들기',
      checked: false,
    },
  ]);
*/

function createBulkTooodos() {
  const array = [];

  for(let i = 0; i <= 2500; i++)
  {
    array.push(
      {
        id : i,
        text : `할일 ${i}`,
        checked : false
      }
    )
  }

  return array;
 }

   const [todos, setTodos] = useState(createBulkTooodos);

  // 고유값으로 사용될 ID
  const nextId = useRef(2501);

  const onInsert = useCallback( insertValue => {
      const todo = {
        id: nextId.current,
        text : insertValue,
        checked: false,
      };

      //setTodos(todos.concat(todo));
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    },
    []
  );


  const onRemove = useCallback( id => {
      
      setTodos( todos => todos.filter(todo => todo.id !== id));
    },
    []
  );

  const onToggle = useCallback ( id => {
      setTodos(todos => todos.map(todo =>
          todo.id ===id ? {...todo, checked: !todo.checked} : todo)
      )
    },
    []
  )

  return (
    <div>
      <TodoTemplate className="App">
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos}  onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;