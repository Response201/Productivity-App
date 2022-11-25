import React, { useEffect, useState } from "react";
import triangle from "../assets/icons/triangle-symbol.svg";
export const DisplayIconForPriority = ({ priority }) => {
  const [color, setColor] = useState("");

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
      style={{
        height: "19px",
        width: "19px",
        backgroundColor: `${color}`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:" black 0px 0px 5px 1px inset"
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
