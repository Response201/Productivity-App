import React, { useEffect, useRef, useState } from "react";
import check from "../assets/lottie/check.json";
import Lottie from "lottie-react";
export const BtnComplete = ({ item }) => {
  const [isFirstRun, setisFirstRun] = useState(true);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (isFirstRun) {
      if (item.done) {
        lottieRef.current.play(3, 3);
        setisFirstRun(false);
      } else {
        lottieRef.current.play(31, 31);
        setisFirstRun(false);
      }
    } else {
      if (item.done && !isFirstRun) {
        lottieRef.current.setDirection(1);
        lottieRef.current.play(3, 31);
      } else if (!item.done && !isFirstRun) {
        lottieRef.current.setDirection(-1);
        lottieRef.current.play(31, 3);
      }
    }
  }, [item.done, isFirstRun]);

  return (
    <div>
      <Lottie
        animationData={check}
        loop={false}
        autoPlay={false}
        lottieRef={lottieRef}
        className="lottie"
      />
    </div>
  );
};
