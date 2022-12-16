/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Mode } from "./components/Mode";
import { TodoComponent } from "./components/TodoComponent";
import { TodoCreate } from "./components/TodoCreate";
import { GetTodoList, NewTodo } from "./reducer/todos";
import { ui } from "./reducer/ui";

function App() {
  const [project, setProject] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState(true);
  const todos = useSelector((store) => store.todos.todosList);
  const themes = useSelector((store) => store.ui.theme);
  const dispatch = useDispatch();







useEffect(() => {
 
  dispatch(GetTodoList());

}, [])







  const types = [
    "Planned",
    "Ready for Development",
    "In Development",
    "Ready for Review"
  ];

  const OnClickToForm = () => {
    setShowForm(true);
    setProject("");
  };

  /* Take out diffrent project for dropdown "project" */

  const unique_project = todos
    .map((obj) => {
      return obj.project;
    })
    .filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });

  /* them switch */

  React.useEffect(() => {
    document.documentElement.className = themes;
  }, [themes]);



  const OnClickToggle = () => {
    if (themes === "root") {
      setMode(false);
      setTimeout(() => {
        dispatch(ui.actions.setTheme("dark"));
      }, 1000);
    }
    if (themes === "dark") {
      setMode(true);
      setTimeout(() => {
        dispatch(ui.actions.setTheme("root"));
      }, 1000);
    }
  };

  return (
    <article body={themes} className="App">
      {showForm && (
        <section className="createTodo___container">
          <TodoCreate setShowForm={setShowForm} />
        </section>
      )}

      <section className="todoList___container">
        <div className="todoList___select_project_input">
          <select
            style={{ heigth: "50px" }}
            value={project}
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

          <button onClick={OnClickToForm}>New todo</button>

          <section
            style={{
              width: "65px",
              position: "absolute",
              right: "0.5%",
              display: "flex",
              zIndex: "100"
            }}
            onClick={OnClickToggle}
          >
            <Mode mode={mode} />
          </section>
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
                          <section key={item._id}>
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
