import React, { useState } from "react";
import video from "../assets/video/video.mp4";
import "./todoCreate.css";
import deltete from "../assets/lottie/close.json";
import { From } from "./Form/From";
import { BtnDelete } from "./BtnDelete";
export const TodoCreate = ({ setShowForm }) => {
  const [deletes, setDeletes] = useState(false);

  const OnclickClose = () => {
    setDeletes(true);
    setTimeout(() => {
      setShowForm(false);
    }, 1000);
  };

  return (
    <section className="todoCreate____container">
      <section className="todoCreate____image">
        <video className="videoTag" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </section>
      <section className="todoCreate____form_container">
        <div className="todoCreate____closeBtn">
          <button className="closeBtn" onClick={OnclickClose}>
            <BtnDelete deltete={deltete} deletes={deletes}  />
          </button>
        </div>

        <From setShowForm={setShowForm} />
      </section>
    </section>
  );
};
