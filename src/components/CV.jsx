import React from 'react';
import cvarray from "./cvarray"
import Job from './Job';
import ParallaxDiv from './ParallaxDiv';


function CV(props) {
  return (
    <div className='relative p-8 mb-5'>
      <div className='text-center text-4xl font-instrument m-24'>
        RÉSUMÉ
        <p className='font-urbanist text-xl'>...an overview where I have worked professionally</p>
            </div>
      <div className='h-fit w-full'>
      {cvarray.map((job) => {
        return (
          <ParallaxDiv
            offset={30}
            className="w-fit mx-auto"
            key={job.year}>
            <Job job={job} />
          </ParallaxDiv>
          
        )
      })}
      </div>
      
    </div>
    
  );
}

export default CV;