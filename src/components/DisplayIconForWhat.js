import React, { useEffect, useState } from "react";
import Bug from "../assets/icons/bug.svg";
import Feature from "../assets/icons/feature.svg";
import Database from "../assets/icons/databas.svg";
export const DisplayIconForWhat = ({ what }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (what === "Bug") {
      setImage(Bug);
    }
    if (what === "Database") {
      setImage(Database);
    } else if (what === "Feature") {
      setImage(Feature);
    }
  }, [what]);

  return (
    <div style={{ heigth: "20px", width: "20px",display:'flex', justifyContent:'center'  }}>
      <img src={image} alt="icon" style={{ heigth: "20px", width: "20px" }} />
    </div>
  );
};
