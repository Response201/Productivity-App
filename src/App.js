import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { TodoComponent } from "./components/TodoComponent";
import { TodoCreate } from "./components/TodoCreate";

function App() {
  const todos = useSelector((store) => store.todos.todosList);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <TodoCreate />

      {todos &&
        todos.map((item) => {
          return (
            <section key={item.id}>
              {" "}
              <TodoComponent item={item} />{" "}
            </section>
          );
        })}
    </div>
  );
}

export default App;
