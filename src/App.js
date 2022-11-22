import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { TodoComponent } from "./components/TodoComponent";
import { TodoCreate } from "./components/TodoCreate";

function App() {
  const [project, setProject] = useState("");
  const types = [
    "Planned",
    "Ready for Development",
    "In Development",
    "Ready for Review"
  ];
  const todos = useSelector((store) => store.todos.todosList);

  /* Take out diffrent project for dropdown "project" */

  const unique_project = todos
    .map((obj) => {
      return obj.project;
    })
    .filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });

  useEffect(() => {}, [todos]);

  return (
    <article className="App">
      <section className="createTodo___container">
        <TodoCreate />
      </section>

      <section className="todoList___container">
        <div className="todoList___select_project_input">
          <select
            style={{ heigth: "50px" }}
            onChange={(e) => setProject(e.target.value)}
          >
            <option style={{ heigth: "50px" }}>Select project</option>
            {unique_project.length >= 1 &&
              unique_project.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        <section className="todoList___content_grid">
          {types.map((category) => {
            return (
              <section className="todoList___category_section">
                <h1>{category}</h1>
                {todos &&
                  todos.map((item) => {
                    if (item.project === project) {
                      if (item.type === category) {
                        return (
                          <section key={item.id}>
                            <TodoComponent item={item} />{" "}
                          </section>
                        );
                      }
                    }
                  })}
              </section>
            );
          })}
        </section>
      </section>
    </article>
  );
}

export default App;
