import React from 'react';
import {motion} from "framer-motion"

import { GoMarkGithub, GoLink } from 'react-icons/go';

import ParallaxDiv from './ParallaxDiv';

const buttonStyles = {
  className:
    'flex items-center bg-eyeblue text-isabelline font-semibold py-0 px-2 rounded-full cursor-pointer shadow-lg',
};

const buttonAnimation = {
  whileHover: { scale: 1.1 },
  whileTap: {scale: 0.9}
}

function Project(props) {
  const content = props.content;
  return (
    <ParallaxDiv className="relative w-fit max-w-[300px] h-fit font-urbanist"
    offset={100}>

      {/* PICTURE AND TITLE */}

      <div className="relative mx-auto w-[90%] md:w-full max-w-[300px]">
        <video
          className='rounded-full shadow-xl'
          src={content.file} alt="picture"
          type="video/mp4"
          autoPlay  loop muted
        >
          <source src={content.file} type="video/mp4" />
        </video>
        
        <svg className='absolute top-[-52%] rotate-[89deg]'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -100 200 300"
          fill='none'>
      <text textAnchor="left" className='text-center font-instrument text-2xl tracking-widest' x="50%" y="0%" dy="-0em" fill='#000000'>
        <textPath xlinkHref="#text-curve">
          {content.name}
        </textPath>
      </text>
      <path id="text-curve" d="M150,150a100,100 0 1,1 0,-200a100,100 0 1,1 0,200" />
        </svg>
      </div>

      
        <div className='relative mx-auto w-[80%] z-50 bg-opacity-95 p-3'>
        <div className='mb-2'>
          <p className='font-bold text-xl'>{content.content1}</p>
          <p className=''>{content.content2}</p></div>
        <div className='flex flex-wrap gap-2 justify-end'>
          {content.techs.map((tech, i) => {
            return (
              <div key={i}  className='text-delftblue w-fit'>#{tech}</div>)
          })}
        </div>
      </div>

      
      {/* BUTTONS */}

      <div className='relative flex gap-2 justify-center text-xl z-100'>
  <a href={content.github} target="_blank" rel="noopener noreferrer">
    <motion.div {...buttonStyles} {...buttonAnimation}>
      <GoMarkGithub className='text-3xl m-2'/>
      GitHub
    </motion.div>
  </a>
  <a href={content.home} target="_blank" rel="noopener noreferrer">
    <motion.div {...buttonStyles} {...buttonAnimation}>
      <GoLink className='text-3xl m-2'/>
      Home
    </motion.div>
  </a>
</div>
      

      
    </ParallaxDiv>
  );
}

export default Project;