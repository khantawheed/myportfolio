import React from 'react';
import aboutme from '../image/aboutme.jpg';
import Image from 'next/image';

const AboutComponent = () => {
  return (
    <div className='min-h-screen flex flex-col items-center lg:px-52 px-5 bg-[#081b29]'>
      <h1 className='font-semibold text-center text-4xl mb-8 mt-16 text-sky-500'>About me</h1>
      <div className='flex flex-col lg:flex-row items-center lg:gap-8'>
        <div className='w-full lg:w-2/4 mb-10 lg:mb-0'> {/* Added margin-bottom for mobile */}
          <Image
            src={aboutme}
            alt='Your Photo'
            className='rounded-lg'
            width={500} 
            height={350} 
          />
        </div>
        <div className='w-full lg:w-2/4 p-4 space-y-5'>
          <p className='text-[#ededed]'>
            Hello, I'm Tawheed Khan, a frontend developer based in Colchester. I recently completed my Master's in Advanced Computer Science from the University of Essex, and I bring over a year of experience working with React and Next.js.
          </p>
          <p className='text-[#ededed]'>
            I am passionate about creating dynamic and user-friendly web applications. My academic background and professional experience have equipped me with the skills to deliver high-quality, efficient, and visually appealing solutions. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
