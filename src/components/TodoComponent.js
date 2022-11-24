import React, { useEffect, useState } from "react";
import "./todoComponent.css";
import { useDispatch } from "react-redux";
import { changeType, deleteTodo, completeTodo } from "../reducer/todos";
import { BtnComplete } from "./BtnComplete";
import { BtnDelete } from "./BtnDelete";
import { BtnEdit } from "./BtnEdit";
import { DisplayIconForWhat } from "./DisplayIconForWhat";
import { DisplayIconForPriority } from "./DisplayIconForPriority";

export const TodoComponent = ({ item }) => {
  const [edit, setEdit] = useState(true);
  const [newType, setNewType] = useState(item.type);
  const [deletes, setDeletes] = useState(false);
  const [move, setMove] = useState(false);
  const [statusIcon, setstatusIcon] = useState(item.status)

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
    setDeletes(true);
    setTimeout(() => {
      dispatch(deleteTodo({ id: item.id }));
    }, 2500);
  };

  /* activate animation on mouse over edit-btn */

  const onMouseOverMove = () => {
    setMove(!move);
  };


/* Change the status of "todo" */

const onClickChangeStatus = () => {


 if(item.status === 'open'){
  setstatusIcon('pending')
 }
else if(item.status === 'pending'){
  setstatusIcon('')
}
else{
  setstatusIcon('open')
}


}



  return (
    <section className="todoComponent___content">
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

      <h1>{item.title}</h1>
      <p>{item.description}</p>
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
          </>
        )}


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
            <BtnDelete deletes={deletes} />
          </div>
          </section>
<section  className="todoComponent___icon"> 
          <p className="todoComponent___whoP"> {item.who} </p>
<div className="todoComponent___whatP"> <DisplayIconForWhat item={item.what} />  </div>
<div className="todoComponent___prioP" >   <DisplayIconForPriority status={item.priority} /> </div>
<div className="todoComponent___statusP" onClick={onClickChangeStatus}> {item.status} </div>
</section>
        </section>
      </section>
    </section>
  );
};
