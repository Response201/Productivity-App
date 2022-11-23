import React, { useEffect, useState } from "react";
import Bug from "../assets/icons/bug.svg";
import Feature from "../assets/icons/feature.svg";
import Database from "../assets/icons/databas.svg";
export const DisplayIconForWhat = ({ item }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(item);

    if (item === "Bug") {
      setImage(Bug);
    }
    if (item === "Database") {
      setImage(Database);
    } else if (item === "Feature") {
      setImage(Feature);
    }
  }, [item]);

  return (
    <div style={{ heigth: "100%", width: "20px" }}>
      <img src={image} />
    </div>
  );
};
