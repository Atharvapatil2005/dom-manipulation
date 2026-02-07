import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/todos";


function App() {
  const [todos, setTodos] = useState([]); {/* todos is the cuerent state and setTodos is used to update it */}

  useEffect(() => {
    fetch("http://localhost:3000/todos")  
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []); // runs ONCE when component mounts

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;