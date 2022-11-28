import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
export const BtnDelete = ({ deletes, deltete }) => {
  const [isFirstRun, setisFirstRun] = useState(true);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (isFirstRun) {
      lottieRef.current.goToAndStop(3, 3);
      setisFirstRun(false);
    } else {
      if (!isFirstRun && deletes) {
        lottieRef.current.play(3, 45);
      }
    }
  }, [deletes, isFirstRun]);

  return (
    <div>
      <Lottie
        animationData={deltete}
        loop={false}
        autoPlay={false}
        lottieRef={lottieRef}
        className="lottieDelete"
      />
    </div>
  );
};
