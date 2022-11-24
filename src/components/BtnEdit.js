/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import edit from "../assets/lottie/edit.json";
import Lottie from "lottie-react";
export const BtnEdit = ({ move }) => {
  const [isFirstRun, setisFirstRun] = useState(true);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (isFirstRun) {
      lottieRef.current.goToAndStop(3, 3);
      setisFirstRun(false);
    } else {
      if (!isFirstRun) {
        lottieRef.current.goToAndStop(3, 3);
        lottieRef.current.play(5,10);
      }
    }
  }, [move]);

  return (
    <div>
      <Lottie
        animationData={edit}
        loop={false}
        autoPlay={false}
        lottieRef={lottieRef}
        className="lottieEdit"
      />
    </div>
  );
};
