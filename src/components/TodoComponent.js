import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeType, deleteTodo, completeTodo } from "../reducer/todos";
export const TodoComponent = ({ item }) => {
  const [newType, setNewType] = useState(item.type);
  const dispatch = useDispatch();

  /* change type for a todo */
  useEffect(() => {
    dispatch(changeType({ id: item.id, type: newType }));
  }, [newType, dispatch, item.id]);

  /* complete todo */
  const onClickComplete = () => {
    dispatch(completeTodo({ id: item.id, done: !item.done }));
  };

  /* Delete todo */

  const onClickDelete = () => {
    dispatch(deleteTodo({ id: item.id }));
  };

  return (
    <section>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p> {item.project} </p>

      {item.done ? (
        <p>Done</p>
      ) : (
        <label>
          Type
          <select
            value={item.type}
            onChange={(e) => setNewType(e.target.value)}
          >
            <option value="Planned">Planned</option>
            <option value="ReadyDevelopment">Ready for Development</option>
            <option value="InDevelopment">In Development</option>
            <option value="ReadyReview">Ready for Review</option>
          </select>
        </label>
      )}

      <input type="checkbox" checked={item.done} onChange={onClickComplete} />
      <button onClick={onClickDelete}>Delete</button>
    </section>
  );
};
