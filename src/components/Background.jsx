import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import paths from "./paths";

const morphPaths = (progress) =>
  useTransform(progress, [0, 1], paths, {
  });

const Background = ({color}) => {
  const [pathIndex, setPathIndex] = useState(1);
  const progress = useMotionValue(pathIndex);
  const path = morphPaths(progress);

  useEffect(() => {
    
    const animationDuration = (Math.floor(((Math.random() * 3) + 1))*3)
    console.log(animationDuration);
  const animation = animate(progress, pathIndex, {
    duration: animationDuration,
    ease: "easeInOut"
  });
    
    let newPathIndex = pathIndex;
      while (newPathIndex === pathIndex) {
        newPathIndex = (Math.random() * 2);
      }
    
    setTimeout(() => {
      setPathIndex(newPathIndex);
    },animationDuration*900)
    
      

  return () => animation.stop();
}, [pathIndex]);

  return (
    <div className="fixed inset-0 w-screen blur-3xl h-screen -z-10">
      <motion.svg viewBox="0 100 1000 1000" width="110vw" height="110vh" style={{ position: "absolute" }}>
        <motion.path d={path} fill={color} />
      </motion.svg>
    </div>
  );
};

export default Background;
