import React from 'react';
import Project from './Project';
import projectsArr from './projectsArr';

function Projects() {
    return (
        <div className='p-16 w-full mx-auto'>
            <div className='text-center text-4xl font-instrument m-24 mx-auto'>
                <p>PROJECTS</p>
                <p className='font-urbanist text-xl'>...some things I have worked on so far</p>
            </div>
            <div className='relative h-fit flex flex-wrap gap-[85px] justify-center'>

                {projectsArr.map((project, index) => {
                    return (

                        <Project key={index} content={project} index={index} />

                    )
                })}
            </div>
        </div>

    );
}

export default Projects;