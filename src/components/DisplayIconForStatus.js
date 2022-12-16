import React, { useEffect, useState } from "react";
import open from "../assets/icons/open.png";
import pending from "../assets/icons/pending.png";
import nothing from "../assets/icons/notOpen.png";
import { useDispatch } from "react-redux";
import { changeStatus, UpdateTodo } from "../reducer/todos";
export const DisplayIconForStatus = ({ status, item }) => {
  const [image, setImage] = useState("");
const dispatch = useDispatch()



 /* Change the status of "todo" */

 const onClickChangeStatus = () => {
  if (!item.done) {
    if (item.status === "open") {
      dispatch(changeStatus({ id: item._id, status: "pending" }));
      dispatch(UpdateTodo({ id: item._id, status: "pending" }));
    } else if (item.status === "pending") {
      dispatch(changeStatus({ id: item._id, status: "" }));
      dispatch(UpdateTodo({ id: item._id, status: "" }));
    } else if (item.status === "") {
      dispatch(changeStatus({ id: item._id, status: "open" }));
      dispatch(UpdateTodo({ id: item._id, status: "open" }));
    }
  }
};








  useEffect(() => {
    if (status === "open") {
      setImage(open);
    }
    if (status === "pending") {
      setImage(pending);
    } else if (status === "") {
      setImage(nothing);
    }
  }, [status]);

  return (
    <div
    onClick={onClickChangeStatus}
      style={{
        heigth: "24px",
        width: "24px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <img
        src={image}
        alt="icon"
        style={{ heigth: "23px", width: "23px", borderRadius: "50%" }}
      />
    </div>
  );
};
