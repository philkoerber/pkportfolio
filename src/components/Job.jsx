import React from 'react';
import {ImLocation} from "react-icons/im"

function Job({ job }) {
  return (
    <div className="max-w-md h-fit rounded bg-battlegray bg-opacity-10 shadow-lg m-8 font-urbanist">

      

          <div className="w-full text-xl font-semibold flex  bg-battlegray rounded-t bg-opacity-10 p-4 items-center">
              
              <div className='text-3xl mr-4'><ImLocation/></div>
              <div className='w-full'>{job.place}
              <div className="text-sm text-gray-600 mt-1">
                {job.location}
                  </div>
              </div>

              <div className="text-right text-md w-[100%] text-gray-600">{job.year}</div>
      </div>

          <div className='p-8'>
              <div className="text-5xl font-semibold font-instrument">{job.title}</div>

      <ul className="list-disc list-inside w-[93.5%] mt-4">
        {job.jobs.map((responsibility, index) => (
            <li
                key={index}
                className="text-gray-700 text-lg mb-2">{responsibility}</li>
        ))}
      </ul>
      </div>

      

    </div>
  );
}

export default Job;