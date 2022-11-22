import React, { useEffect, useState } from "react";
import "./todoComponent.css";
import { useDispatch } from "react-redux";
import { changeType, deleteTodo, completeTodo } from "../reducer/todos";
import check from "../assets/lottie/check.json";
import { useLottie } from "lottie-react";

export const TodoComponent = ({ item }) => {
  const [edit, setEdit] = useState(true);
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
    <section className="todoComponent___content">
      <button onClick={() => setEdit(!edit)}>Edit</button>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p> {item.project} </p>

      <section className="todoComponent___edit_section">
        {edit ? (
          <>{item.done ? <p>Done</p> : <p>{item.type}</p>}</>
        ) : (
          <>
            {item.done ? (
              <p>Done</p>
            ) : (
              <p>
                Type
                <select
                  value={item.type}
                  onChange={(e) => setNewType(e.target.value)}
                >
                  <option value="Planned">Planned</option>
                  <option value="Ready for Development">
                    Ready for Development
                  </option>
                  <option value="In Development">In Development</option>
                  <option value="Ready for Review">Ready for Review</option>
                </select>
              </p>
            )}

            <p>
              Done
              <input
                type="checkbox"
                checked={item.done}
                onChange={onClickComplete}
              />
            </p>

            <button onClick={onClickDelete}>Delete</button>
          </>
        )}
      </section>
    </section>
  );
};
