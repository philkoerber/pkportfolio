import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useScroll } from 'framer-motion';

const ParallaxDiv = ({ children, className, offset }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({target: ref, offset: ["end", "start end"]});

  const smoothedY = useSpring(scrollYProgress, { stiffness: 300, damping: 100 });
  const y = useTransform(smoothedY, [0, 1], ['0%', offset + '%']);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxDiv;