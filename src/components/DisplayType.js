import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeType, UpdateTodo } from "../reducer/todos";

export const DisplayType = ({ item }) => {
  const [newType, setNewType] = useState(item.type);
  const dispatch = useDispatch();

  /* change type for a todo */

  const ChangeType = (e) => {
    dispatch(UpdateTodo({ id: item._id, type: e }));
    dispatch(changeType({ id: item._id, type: e }));
  };

  return (
    <select value={newType} onChange={(e) => ChangeType(e.target.value)}>
      <option value="Planned">Planned</option>
      <option value="Ready for Development">Ready for Development</option>
      <option value="In Development">In Development</option>
      <option value="Ready for Review">Ready for Review</option>
    </select>
  );
};
