import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTodo } from "../reducer/todos";
export const TodoCreate = () => {
  const [title, setTitle] = useState("");
  const [descripton, setDescripton] = useState("");
  const [type, setType] = useState("Planned");
  const [who, setWho] = useState('Frontend')
  const [what, setWhat] = useState('Feature')
  const [priority, setPriority] = useState("Moderate")
  const [project, setProject] = useState("");
  const [newProject, setNewProject] = useState(false);
  const projects_Category = useSelector((store) => store.todos.todosList);
  const dispatch = useDispatch();

  /* create a todo */
  const OnsubmitTodo = (e) => {
    e.preventDefault();
    console.log(title, descripton, project, type,who);
    dispatch(
      newTodo({
        title: title,
        description: descripton,
        project: project,
        type: type,
        who:who,
        what:what,
        priority:priority
      })
    );
  };

  /* Take out diffrent project for dropdown "project" */

  const unique_project = projects_Category
    .map((obj) => {
      return obj.project;
    })
    .filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });

  /* If todo creates under a new project */

  const OnclickNewProject = () => {
    setNewProject(!newProject);
    setProject("");
  };

  return (
    <section>
      <form onSubmit={OnsubmitTodo}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Descripton
          <input
            type="text"
            value={descripton}
            onChange={(e) => setDescripton(e.target.value)}
          />
        </label>
        <label>
          Type
          <select onChange={(e) => setType(e.target.value)}>
            <option value="Planned">Planned</option>
            <option value="Ready for Development">Ready for Development</option>
            <option value="In Development">In Development</option>
            <option value="Ready for Review">Ready for Review</option>
          </select>
        </label>
        <label>
          For
          <select onChange={(e) => setWho(e.target.value)}>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>

        <label>
          What
          <select onChange={(e) => setWhat(e.target.value)}>
          <option value="Feature">Feature</option>
            <option value="Bug">Bug</option>
            <option value="Database">Database</option>
            
          </select>
        </label>

        <label>
        Priority
          <select onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
            
          </select>
        </label>



        {newProject ? (
          <label>
            {" "}
            Project name{" "}
            <input
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />{" "}
          </label>
        ) : (
          <select onChange={(e) => setProject(e.target.value)}>
            <option>Select project</option>
            {unique_project.length >= 1 &&
              unique_project.map((item) => (
                <option key={item} value={item}>
                  {" "}
                  {item}{" "}
                </option>
              ))}
          </select>
        )}
        <label>
          New project?
          <input
            type="checkbox"
            value={newProject}
            onClick={OnclickNewProject}
          />
        </label>

        <button> Create Todo</button>
      </form>
    </section>
  );
};
