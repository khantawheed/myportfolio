import React from 'react';
import ProjectCard from './ProjectCard';
import music from '../image/musicapp.png';

const ProjectsComponent = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#ffffff]'>
      <h1 className='font-semibold text-center text-4xl mt-14 mb-8 text-sky-500'>Projects</h1>
      <div className='flex flex-wrap pb-8 gap-4 justify-center lg:flex-row'>
        <ProjectCard title="Music App" img={music} value="TunesHub is a React.js and Tailwind CSS-powered music app that brings the latest chart-toppers and releases to your fingertips. With React Redux for seamless state management and Rapid API integration, it delivers real-time updates for a dynamic user experience. Dive into top charts, discover new tracks, and create personalized playlists—all in a sleek and user-friendly interface. Immerse yourself in the world of music with TunesHub, where React.js meets top-notch design for an unparalleled listening journey." />
        <ProjectCard title="Music App" img={music} value="TunesHub is a React.js and Tailwind CSS-powered music app that brings the latest chart-toppers and releases to your fingertips. With React Redux for seamless state management and Rapid API integration, it delivers real-time updates for a dynamic user experience. Dive into top charts, discover new tracks, and create personalized playlists—all in a sleek and user-friendly interface. Immerse yourself in the world of music with TunesHub, where React.js meets top-notch design for an unparalleled listening journey." />
        <ProjectCard title="Music App" img={music} value="TunesHub is a React.js and Tailwind CSS-powered music app that brings the latest chart-toppers and releases to your fingertips. With React Redux for seamless state management and Rapid API integration, it delivers real-time updates for a dynamic user experience. Dive into top charts, discover new tracks, and create personalized playlists—all in a sleek and user-friendly interface. Immerse yourself in the world of music with TunesHub, where React.js meets top-notch design for an unparalleled listening journey." />
        <ProjectCard title="Music App" img={music} value="TunesHub is a React.js and Tailwind CSS-powered music app that brings the latest chart-toppers and releases to your fingertips. With React Redux for seamless state management and Rapid API integration, it delivers real-time updates for a dynamic user experience. Dive into top charts, discover new tracks, and create personalized playlists—all in a sleek and user-friendly interface. Immerse yourself in the world of music with TunesHub, where React.js meets top-notch design for an unparalleled listening journey." />
      </div>
    </div>
  );
}

export default ProjectsComponent;