import React, { useState } from 'react';
import { motion, useSpring, useMotionValueEvent } from 'framer-motion';

function ScrollProgress(props) {
    const [scrolledToBottom, setScrolledToBottom] = useState(false)
    useMotionValueEvent(props.scrollYProgress, "change", (latest) => {
        if (latest > 0.92) { setScrolledToBottom(true) }
        else(setScrolledToBottom(false))
    })
  
    const scaleX = useSpring(props.scrollYProgress, { stiffness: 1000, damping: 100 })

    const handleClick = () => {
        props.setPage()
    }
    
    return (
        <>
        <motion.div
            className="fixed bottom-0 bg-blue-700 h-2 w-full z-50"
            style={{ scaleX }}
            
        />
            <motion.div
                className='fixed bottom-9 h-2 text-center w-full cursor-pointer'
                initial={{ opacity: 0, y: "30px" }}
                animate={scrolledToBottom ? { opacity: 1, y: "0px" } : {}}
                onClick={() => handleClick()}
            >
                <motion.h1 className='font-instrument text-3xl' whileHover={{scale: 1.2}} whileTap={{scale: 0.8}}>GO TO TOP</motion.h1>
             </motion.div>
        </>
        
    );
}

export default ScrollProgress;