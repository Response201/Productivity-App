import React, { useEffect, useState } from "react";
import triangle from "../assets/icons/triangle-symbol.svg";
export const DisplayIconForPriority = ({ status }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (status === "Critical") {
      setColor("red");
    }
    if (status === "High") {
      setColor("orange");
    }
    if (status === "Moderate") {
      setColor("yellow");
    } else if (status === "Low") {
      setColor("green");
    }
  }, [status]);

  return (
    <div
      style={{
        height: "16px",
        width: "16px",
        backgroundColor: `${color}`,
        zIndex: "0",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img
        style={{ height: "14px", width: "14px" }}
        src={triangle}
        alt="icon"
      />
    </div>
  );
};
