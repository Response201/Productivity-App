/* eslint-disable */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { TodoComponent } from "./components/TodoComponent";
import { TodoCreate } from "./components/TodoCreate";

function App() {
  const [project, setProject] = useState("");
  const todos = useSelector((store) => store.todos.todosList);

  const types = [
    "Planned",
    "Ready for Development",
    "In Development",
    "Ready for Review"
  ];

  /* Take out diffrent project for dropdown "project" */

  const unique_project = todos
    .map((obj) => {
      return obj.project;
    })
    .filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });

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
            /* Take out how many todos there is under category  */

            const count = todos.filter((e) => {
              if (project === e.project && category === e.type) {
                return <div key={e.id}></div>;
              }
            });

            return (
              <section key={category} className="todoList___category_section">
                <h1>
                  {category} ({count.length})
                </h1>
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
