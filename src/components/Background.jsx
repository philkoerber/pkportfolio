import { motion } from "framer-motion";
import React, { useEffect, useState, useMemo } from "react";
import { interpolate } from "flubber";
import paths from "./paths" 

const Background = (props) => {
  const [pathIndex, setPathIndex] = useState(0);
    const [pathIndex2, setPathIndex2] = useState(0);


  const interpolator = useMemo(() => interpolate(paths[0], paths[1]), [paths]);
  const interpolator2 = useMemo(() => interpolate(paths[1], paths[2]), [paths]);


  const [path, setPath] = useState(interpolator(1));
  const [path2, setPath2] = useState(interpolator(1))
  

  useEffect(() => {
    setTimeout(() => {
      setPath(interpolator(0.1));
    setPath2(interpolator2(0.1))
    }, 100)
  },[])


  useEffect(() => {
  const randomNumber = Math.floor(Math.random() * 400)/400
  const timeoutId = setTimeout(() => {setPathIndex(randomNumber) }, 4000)
  setPath(interpolator(randomNumber))

  return () => clearTimeout(timeoutId)
  }, [pathIndex])
  
  useEffect(() => {
  const randomNumber = Math.floor(Math.random() * 400)/400
  const timeoutId = setTimeout(() => {setPathIndex2(randomNumber) }, 3050)
  setPath2(interpolator2(randomNumber))

  return () => clearTimeout(timeoutId)
}, [pathIndex2])



  return (
    <div className="fixed inset-0 w-screen h-screen blur-3xl -z-10">
      <motion.svg viewBox="0 100 1000 1000" width="110vw" height="110vh" style={{position: "absolute"}}>
        <motion.path
          d={""}
          animate={{d: path}}
          fill={"#008AB8"}
          transition={{ duration: 6 }}
        />
        <motion.path
          d={""}
          animate={{d: path2}}
          fill={"#00BBF9"}
          transition={{ duration: 5}}
        />
      </motion.svg>
        
    </div>
  );
};
export default Background;