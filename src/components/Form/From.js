/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { newTodo } from "../../reducer/todos";
import "./form.css";
import { PageFour } from "./PageFour";
import { PageOne } from "./PageOne";
import { PageThree } from "./PageThree";
import { PageTwo } from "./PageTwo";

export const From = ({ setShowForm }) => {
  const [title, setTitle] = useState("");
  const [descripton, setDescripton] = useState("");
  const [type, setType] = useState("Planned");
  const [who, setWho] = useState("Frontend");
  const [what, setWhat] = useState("Feature");
  const [priority, setPriority] = useState("Moderate");
  const [project, setProject] = useState("");
  const [newProject, setNewProject] = useState(false);
  const [page, setPage] = useState(1);
  const [preventBtnAction, setpreventBtnAction] = useState(false);
  const dispatch = useDispatch();
  const [btnPrev, setBtnPrev] = useState(false);
  const [btnNext, setBtnNext] = useState(false);

  /* create a todo */
  const OnsubmitTodo = () => {
    if (!preventBtnAction) {
   
      setpreventBtnAction(true);
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
      setTitle("");
      setDescripton("");
      setProject(project);
 

      /* timeout => needed to show the btn animation */
      setTimeout(() => {
        setShowForm(false);
        setPage(1);
      }, 500);
    }
  };

  /* Actions for Next-Btn */



  useEffect(() => {
    if (
      (page === 1 && title !== "" && descripton !== "") ||
      (page === 2 && project !== "")
    ) {
      setBtnNext(true);
    } else if (page > 2) {
      setBtnNext(true);
    } else {
      setBtnNext(false);
    }
  }, [title, descripton, project, page]);



  const OncklickNext = (e) => {
    e.preventDefault();

    if (page <= 3 && btnNext) {
      setPage(page + 1);
      setBtnNext(false);
    }

    if (page === 4) {
      OnsubmitTodo();
    }
  };

  /* Actions for Prev-Btn */

  const OncklickPrev = (e) => {
    e.preventDefault();
    if (page !== 1 && !preventBtnAction) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if (page !== 1 && !preventBtnAction) {
      setBtnPrev(true);
    } else {
      setBtnPrev(false);
    }
  }, [page]);

  return (
    <form className="todoCreate____form">
      {page === 1 && (
        <PageOne
          title={title}
          setTitle={setTitle}
          descripton={descripton}
          setDescripton={setDescripton}
        />
      )}
      {page === 2 && (
        <PageTwo
          newProject={newProject}
          setNewProject={setNewProject}
          setProject={setProject}
          project={project}
        />
      )}

      {page === 3 && <PageThree setType={setType} setWho={setWho} />}

      {page === 4 && <PageFour setWhat={setWhat} setPriority={setPriority} />}

      <section className="todoCreate____section_btn">
        <button
          className={btnPrev ? "btnTrue" : "btnFalse"}
          onClick={OncklickPrev}
        >
          Prev
        </button>
        <button
          className={btnNext ? "btnTrue" : "btnFalse"}
          onClick={OncklickNext}
        >
          {page !== 4 ? "Next" : "Submit"}
        </button>
      </section>
    </form>
  );
};
