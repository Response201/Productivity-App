import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import triangle from "../assets/icons/triangle-symbol.svg";
import { changePriority, UpdateTodo } from "../reducer/todos";
export const DisplayIconForPriority = ({ priority, item }) => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  /* Change Priority of "todo" */

  const onClickChangePriority = () => {
    if (!item.done) {
      if (item.priority === "Critical") {
        dispatch(changePriority({ id: item._id, priority: "Low" }));
        dispatch(UpdateTodo({ id: item._id, priority: "Low" }));
      }
      if (item.priority === "High") {
        dispatch(changePriority({ id: item._id, priority: "Critical" }));
        dispatch(UpdateTodo({ id: item._id, priority: "Critical" }));
      }
      if (item.priority === "Moderate") {
        dispatch(changePriority({ id: item._id, priority: "High" }));
        dispatch(UpdateTodo({ id: item._id, priority: "High" }));
      } else if (item.priority === "Low") {
        dispatch(changePriority({ id: item._id, priority: "Moderate" }));
        dispatch(UpdateTodo({ id: item._id, priority: "Moderate" }));
      }
    }
  };

  useEffect(() => {
    if (priority === "Critical") {
      setColor("red");
    }
    if (priority === "High") {
      setColor("orange");
    }
    if (priority === "Moderate") {
      setColor("yellow");
    } else if (priority === "Low") {
      setColor("green");
    }
  }, [priority]);

  return (
    <div
      onClick={onClickChangePriority}
      style={{
        height: "19px",
        width: "19px",
        backgroundColor: `${color}`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: " black 0px 0px 5px 1px inset"
      }}
    >
      <img
        style={{ height: "17px", width: "17px" }}
        src={triangle}
        alt="icon"
      />
    </div>
  );
};
