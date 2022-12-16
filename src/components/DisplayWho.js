import React from "react";
import { useDispatch } from "react-redux";
import { changeWho, UpdateTodo } from "../reducer/todos";

export const DisplayWho = ({ item }) => {
  const dispatch = useDispatch();

  const onClickChangeWho = () => {
    if (!item.done) {
      if (item.who === "Frontend") {
        dispatch(changeWho({ id: item._id, who: "Backend" }));
        dispatch(UpdateTodo({ id: item._id, who: "Backend" }));
      }
      if (item.who === "Backend") {
        dispatch(changeWho({ id: item._id, who: "Designer" }));
        dispatch(UpdateTodo({ id: item._id, who: "Designer" }));
      }
      if (item.who === "Designer") {
        dispatch(changeWho({ id: item._id, who: "Other" }));
        dispatch(UpdateTodo({ id: item._id, who: "Other" }));
      } else if (item.who === "Other") {
        dispatch(changeWho({ id: item._id, who: "Frontend" }));
        dispatch(UpdateTodo({ id: item._id, who: "Frontend" }));
      }
    }
  };

  return (
    <p className="todoComponent___whoP" onClick={onClickChangeWho}>
      {item.who}
    </p>
  );
};
