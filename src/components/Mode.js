import React, { useEffect, useRef, useState } from "react";
import animation from "../assets/lottie/mode.json";
import Lottie from "lottie-react";

export const Mode = ({ mode }) => {
  const [isFirstRun, setisFirstRun] = useState(true);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (isFirstRun && mode) {
      lottieRef.current.pause(3,3);
      setisFirstRun(false);
    } else if(!isFirstRun ) {
      if (!isFirstRun && !mode) {
        lottieRef.current.playSegments([[3, 105]], true);
        
      }

      if (!isFirstRun && mode) {
        lottieRef.current.playSegments([[103, 3]], true);
      
      }
    }
    // eslint-disable-next-line
  }, [mode]);

  return (
    <>
      <Lottie
        animationData={animation}
        loop={false}
        autoPlay={false}
        lottieRef={lottieRef}
      />
    </>
  );
};
