import React from 'react'
import { useSelector } from 'react-redux';

export const PageTwo = ({newProject, setNewProject, setProject, project}) => {
  const projects_Category = useSelector((store) => store.todos.todosList);
  


 /* If todo creates under a new project */

 const OnclickNewProject = () => {
  setNewProject(!newProject);
  setProject("");
};


  /* Take out diffrent project for dropdown "project" */

  const unique_project = projects_Category
    .map((obj) => {
      return obj.project;
    })
    .filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });


  return (
    <section className="form____section_newProject">
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
              <option>
                {" "}
                {project !== "" ? `${project}` : "Select project"}{" "}
              </option>
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
        </section>
  )
}
