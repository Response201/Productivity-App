import React, { useEffect, useState } from "react";
import open from "../assets/icons/open.png";
import pending from "../assets/icons/pending.png";
import nothing from "../assets/icons/notOpen.png";
export const DisplayIconForStatus = ({ status }) => {
  const [image, setImage] = useState("");

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
