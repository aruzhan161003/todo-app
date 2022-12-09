import ToDoInput from "./components/ToDoInput";
import "./styles/style.css";
import { AiFillDelete, AiFillEdit, AiFillFileAdd } from "react-icons/ai";
import { useState } from "react";

function App() {
  // todo = 'Buy Milk'
  // todos = ['Buy Milk', 'Buy Bread', ...]

  // todo = { id: 1, text: 'Buy Milk' }
  // todos = [ { id: 1, text: 'Buy Milk' }, { id: 2, text: 'Buy Bread' }, ... ]

  const [todos, setTodos] = useState([
    { id: 1, text: "Buy Milk" },
    { id: 2, text: "Buy Bread" },
    { id: 3, text: "Buy Bread" },
    { id: 4, text: "Buy Bread" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleOnInputChanged = (event) => {
    let newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleCreateToDo = () => {
    // let newId = todos[todos.length - 1]["id"] + 1;
    let newId = Math.floor(Math.random() * 10000000000000000000);
    let newTodo = { id: newId, text: inputValue };
    let updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setInputValue("");
  };

  const handleDeleteToDo = (todoId) => {
    let updatedTodos = todos.filter((todo) => todo["id"] != todoId);
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
      <nav>
        <h1>ToDo App</h1>
      </nav>
      <div className="todo-container">
        <div className="todo-input">
          <input
            onChange={(event) => handleOnInputChanged(event)}
            value={inputValue}
            placeholder="Write your TODO"
          />
          <button className="btn create" onClick={handleCreateToDo}>
            <AiFillFileAdd />
          </button>
        </div>
        <div className="todo-list">
          {todos.map((todo) => (
            <div className="todo">
              <p>{todo["text"]}</p>
              <div className="todo-actions">
                <button className="btn edit">
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => handleDeleteToDo(todo["id"])}
                  className="btn delete"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
