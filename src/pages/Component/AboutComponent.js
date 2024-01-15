import React from 'react';
import aboutme from '../image/aboutme.jpg';
import Image from 'next/image';

const AboutComponent = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-stone-200'>
      <h1 className='font-semibold text-center text-4xl mb-8 lg:mt-14 mt-16 text-sky-500'>About me</h1>
      <div className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='w-full lg:w-2/4'>
          <Image
            src={aboutme}
            alt='Your Photo'
            className='rounded-lg'
          />
        </div>
        <div className='w-full lg:w-2/4 p-4 space-y-5'>
          <p className='text-sky-950'>
            Hello, I'm Tawheed Khan, a frontend developer based in Colchester. I recently completed my Master's in Advanced Computer Science from the University of Essex, and I bring over a year of experience working with React and Next.js.
          </p>
          <p className='text-sky-950'>
            I am passionate about creating dynamic and user-friendly web applications. My academic background and professional experience have equipped me with the skills to deliver high-quality, efficient, and visually appealing solutions. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
