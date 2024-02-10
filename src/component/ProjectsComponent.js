import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsComponent = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#081b29]'>
      <h1 className='font-semibold text-center text-4xl mt-16 mb-8 text-sky-500'>Projects</h1>
      <div className='flex flex-wrap pb-8 gap-4 justify-center lg:flex-row'>
        <ProjectCard title="Music App" img='/image/musicapp.png' code='https://github.com/khantawheed/musicapp2'/>
        <ProjectCard title="E-commers" img='/image/bikeee.png' code='https://github.com/khantawheed/bikee' live='https://bikeee-rho.vercel.app/'/>
        <ProjectCard title="Cafe website" img='/image/coffee site.png' code='https://github.com/khantawheed/cafecoffee' />
        <ProjectCard title="Data Transfer" img='/image/musicapp.png' code='https://github.com/khantawheed/blockchain_project'/>
      </div>
    </div>
  );
}

export default ProjectsComponent;