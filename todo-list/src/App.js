import './App.css';
import { useRef, useState } from "react";

function App() {
  const [todos, setToDos] = useState([]);

  const inputRef = useRef();

  const handelAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    if (text.trim() !== '') {
      setToDos([...todos, newItem]);
      inputRef.current.value = "";
    }
  };

  const handelItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setToDos(newTodos);
  };

  const handelDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setToDos(newTodos);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='todo-container'>
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className='item'>
                <li 
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handelItemDone(index)}
                >
                  {text}
                </li>
                <span className='trash' onClick={() => handelDeleteItem(index)}>❌</span>
              </div>
            );
          })}
        </ul>
        <input ref={inputRef} placeholder='Enter Item..' />
        <button onClick={handelAddTodo}>Add</button>
      </div>
      
    </div>
  );
}

export default App;