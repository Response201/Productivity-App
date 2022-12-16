/* eslint-disable */
import React, { useEffect, useState } from "react";
import deltete from "../assets/lottie/delete.json";
import "./todoComponent.css";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  completeTodo,
  changeStatus,
  UpdateTodo,
  DeleteThis
} from "../reducer/todos";
import { BtnComplete } from "./BtnComplete";
import { BtnDelete } from "./BtnDelete";
import { BtnEdit } from "./BtnEdit";
import { DisplayIconForWhat } from "./DisplayIconForWhat";
import { DisplayIconForPriority } from "./DisplayIconForPriority";
import { DisplayIconForStatus } from "./DisplayIconForStatus";
import { DisplayWho } from "./DisplayWho";
import { DisplayType } from "./DisplayType";

export const TodoComponent = ({ item }) => {
  const [edit, setEdit] = useState(true);
  const [deletes, setDeletes] = useState(false);
  const [move, setMove] = useState(false);
  const [color, setColor] = useState("var(--pink)");
  const dispatch = useDispatch();

  /* complete todo */
  const onClickComplete = () => {
    dispatch(completeTodo({ id: item._id, done: !item.done }));
    dispatch(changeStatus({ id: item._id, status: "" }));
    dispatch(UpdateTodo({ id: item._id, done: !item.done, status: "" }));
  };

  /* Delete todo */

  const onClickDelete = () => {
    setDeletes(true);

    /* timeout => needed to show the delete-btn animation */

    setTimeout(() => {
      dispatch(deleteTodo({ id: item._id }));
      dispatch(DeleteThis({ id: item._id }));
    }, 2500);
  };

  /* activate animation on mouse over edit-btn */

  const onMouseOverMove = () => {
    setMove(!move);
  };

  /* color after item.type */ 

  useEffect(() => {
    if (item.type === "Planned") {
      setColor("pink");
    } else if (item.type === "Ready for Development") {
      setColor("purple");
    } else if (item.type === "In Development") {
      setColor("orange");
    } else if (item.type === "Ready for Review") {
      setColor("yellow");
    }
  }, [item.type]);

  return (
    <section
      className="todoComponent___content"
      style={{
        background: `linear-gradient(var(--${color}) , var(--gradient))`
      }}
    >
      {!item.done && (
        <div
          className="todoComponent___editButton"
          onClick={() => setEdit(!edit)}
          onMouseEnter={onMouseOverMove}
        >
          <p>Edit</p>
          <BtnEdit move={move} />
        </div>
      )}
      <div className="todoComponent___item_container">
        <h1>{item.title}</h1>
        <p>{item.description}</p>

        <section className="todoComponent___section_type">
          {edit ? (
            <>{item.done ? <p>Done</p> : <p>{item.type}</p>}</>
          ) : (
            <>{item.done ? <p>Done</p> : <DisplayType item={item} />}</>
          )}
        </section>
      </div>

      <section className="todoComponent___iconAndBtns">
        <section className="todoComponent___btns">
          <div
            onClick={onClickComplete}
            className="todoComponent___completeLottie_container"
          >
            <BtnComplete item={item} />
          </div>

          <div
            onClick={onClickDelete}
            className="todoComponent___deleteLottie_container"
          >
            <BtnDelete deletes={deletes} deltete={deltete} />
          </div>
        </section>
        <section className="todoComponent___icon">
          <DisplayWho item={item} />
          <div className="todoComponent___whatP">
            {" "}
            <DisplayIconForWhat what={item.what} item={item} />{" "}
          </div>
          <div className="todoComponent___prioP">
            {" "}
            <DisplayIconForPriority priority={item.priority} item={item} />{" "}
          </div>
          <div className="todoComponent___statusP">
            {" "}
            <DisplayIconForStatus status={item.status} item={item} />{" "}
          </div>
        </section>
      </section>
    </section>
  );
};
