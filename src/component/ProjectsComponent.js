import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:px-32 px-5 bg-[#081b29]'>
  <h1 className='font-semibold text-center text-4xl mt-16 mb-8 text-sky-500'>Projects</h1>
  <div className='grid pb-8 md:grid-cols-2 2xl:grid-cols-3'>
    <ProjectCard title="Music App" img='/image/musicapp.png' code='https://github.com/khantawheed/musicapp2' live='https://musicapp12.netlify.app' detail='/details-musicapp'/>
    <ProjectCard title="E-commers" img='/image/bikeee.png' code='https://github.com/khantawheed/bikee' live='https://bikeee-rho.vercel.app/' detail='/details-ecommers'/>
    <ProjectCard title="Cafe website" img='/image/coffee site.png' code='https://github.com/khantawheed/cafecoffee' live='https://main--shimmering-pastelito-688b70.netlify.app/' detail='/details-cafe'/>
    <ProjectCard title="Blockchain Based Data Transfer" img='/image/blockchain.png' code='https://github.com/khantawheed/blockchain_project' detail='/details-blockchain'/>
  </div>
</div>
  );
}

export default ProjectsComponent;