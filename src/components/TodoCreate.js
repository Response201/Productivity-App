import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTodo } from "../reducer/todos";
import video from "../assets/video/video.mp4";
import "./todoCreate.css";
import { From } from "./Form/From";
export const TodoCreate = ({ setShowForm }) => {






  return (
    <section className="todoCreate____container">
      <section className="todoCreate____image">
        <video className="videoTag" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </section>
      <section className="todoCreate____form_container">
        <div className="todoCreate____closeBtn">
          <button onClick={() => setShowForm(false)}> X</button>
        </div>

        <From setShowForm={setShowForm} />
      </section>
    </section>
  );
};
