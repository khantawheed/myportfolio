import React from 'react';
import Image from 'next/image';

const ProjectCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 md:w-1/3 p-3'>
      <div className='bg-white p-3 rounded-lg'>
        <div>
          <Image className="rounded-xl h-44 w-full" src={props.img} alt="img" />
        </div>
        <div className='p-2 mt-3'>
          <div className='flex flex-col justify-between'>
            <h3 className='font-semibold text-xl text-sky-950'>{props.title}</h3>
            <p className='text-sm mt-1 text-sky-950 line-clamp-3'>{props.value}</p>
          </div>
          <div className='flex flex-row justify-between mt-3'>
            <div className='flex gap-2'>
              <button className='px-3 text-sm text-white  bg-[#081b29]  transition-all rounded-md'>GitHub</button>
              <button className='px-3 text-sm text-white  bg-[#081b29]  transition-all rounded-md'>Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;