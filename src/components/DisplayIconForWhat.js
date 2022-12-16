import React, { useEffect, useState } from "react";
import Bug from "../assets/icons/bug.svg";
import Feature from "../assets/icons/feature.svg";
import Database from "../assets/icons/databas.svg";
import Design from "../assets/icons/design.svg"
import { useDispatch } from "react-redux";
import { changeWhat, UpdateTodo } from "../reducer/todos";
export const DisplayIconForWhat = ({ what, item }) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  /* Change what(bug, feature ect) of "todo" */

  const onClickChangeWhat = () => {
    if (!item.done) {
      if (item.what === "Bug") {
        dispatch(changeWhat({ id: item._id, what: "Database" }));
        dispatch(UpdateTodo({ id: item._id, what: "Database" }));
      }
     
        if (item.what === "Database") {
          dispatch(changeWhat({ id: item._id, what: "Design" }));
          dispatch(UpdateTodo({ id: item._id, what: "Design" }));
        }
      }
      if (item.what === "Design") {
        dispatch(changeWhat({ id: item._id, what: "Feature" }));
        dispatch(UpdateTodo({ id: item._id, what: "Feature" }));
      } else if (item.what === "Feature") {
        dispatch(changeWhat({ id: item._id, what: "Bug" }));
        dispatch(UpdateTodo({ id: item._id, what: "Bug" }));
      }
    
  };

  useEffect(() => {
    if (what === "Bug") {
      setImage(Bug);
    }
    if (what === "Database") {
      setImage(Database);
    }if (what === "Design") {
      setImage(Design);
    }  else if (what === "Feature") {
      setImage(Feature);
    }
  }, [what]);

  return (
    <div
      onClick={onClickChangeWhat}
      style={{
        heigth: "20px",
        width: "20px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <img src={image} alt="icon" style={{ heigth: "20px", width: "20px" }} />
    </div>
  );
};
