import React from 'react';
import { motion } from 'framer-motion';
import pk from "./pics/pk.svg"
import ParallaxDiv from './ParallaxDiv';

const styles = "cursor-pointer py-10";

const motionAnimation = {
    whileHover: { scale: 1.5 },
    whileTap: { scale: 0.9 },
  };

function NavBar(props) {
  
  const handleClick = (e) => {
    props.setPage(e.target.innerText);
  };

  return (
    <div className="h-screen w-full overflow-hidden flex justify-center">
      <div className="flex flex-col justify-center items-center font-instrument text-4xl">
        <motion.div
          {...motionAnimation}
          onClick={handleClick}
          className={styles}
        >
          <motion.h1>ABOUT ME</motion.h1>
        </motion.div>
        <motion.div
          {...motionAnimation}
          onClick={handleClick}
          className={styles}
        >
          <motion.h1>PROJECTS</motion.h1>
        </motion.div>
        <motion.div
          {...motionAnimation}
          onClick={handleClick}
          className={styles}
        >
          <motion.h1>RÉSUMÉ</motion.h1>
        </motion.div>
        <motion.div
          {...motionAnimation}
          onClick={handleClick}
          className={styles}
        >
          <motion.h1>CONTACT</motion.h1>

          
          

        </motion.div>
      </div>
      <motion.div
        className='absolute w-full h-full flex -z-10'
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{duration: 16}}
            >
                
        <img className='mx-auto w-1/2 min-w-[300px] max-w-[700px] translate-x-[5%] opacity-10' src={pk} />
          </motion.div>
    </div>
  );
}

export default NavBar;
