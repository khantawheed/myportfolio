import React from 'react';
import Image from 'next/image';
import myPhoto2 from '../image/heroimage.png';
import htmllogo from '../image/html.jpg';
import csslogo from '../image/css.jpg';
import nextlogo from '../image/next.jpg';
import reactlogo from '../image/cover.jpg';
import vuelogo from '../image/vue.jpg';
import tailwindlogo from '../image/tailwind.jpg';
import javascriptlogo from '../image/javascript-logo.webp';

const HomeComponent = () => {
  return (
    <div className='min-h-screen bg-[#081b29] flex flex-col items-center justify-center gap-8 w-full'>
      <div className='flex flex-col justify-center lg:flex-row lg:justify-center items-center lg:px-32 px-5 gap-5 mt-20 lg:mt-20'>
        <div className='w-full lg:w-2/4 space-y-4'>
          <h1 className="text-lg font-bold mb-2 text-[#ededed]">Hello There, I'm</h1>
          <h1 className="text-4xl font-bold mb-4 text-[#00abf0]">
            <span className='border-b-4 border-[#ededed] inline-block'>Tawheed </span> Khan
          </h1>
          <p className="text-lg mb-2 font-semibold text-[#00abf0]">
            Frontend Developer
          </p>
          <p className="text-sm text-[#ededed]">
            Dedicated frontend developer with a passion for building intuitive and visually appealing user interfaces.
            Proficient in modern web technologies, I bring creativity and attention to detail to every project.
          </p>
          <div className="flex flex-col lg:flex-row gap-2">
            <button
              href="#portfolio"
              className="bg-sky-500 text-white py-2 px-4 rounded-full font-semibold text-lg transition duration-300 hover:bg-[#081b29] hover:text-[#00abf0]"
            >
              Download CV
            </button>
            <a
              href="#contact"
              className="bg-[#081b29] text-[#ededed] mt-2 lg:mt-0 py-2 px-4 rounded-full font-semibold text-lg border-2 border-sky-500 transition duration-300 hover:bg-white hover:text-[#081b29]"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative mt-5 lg:mt-0">
          <Image src={myPhoto2} height={350} width={300} className='my-photo-animation' alt='my photo'/>
        </div>
      </div>
      <div className="flex items-center justify-center p-3 border-2 border-sky-500 rounded-xl shadow-md bg-white w-full mt-5 lg:w-1/2 lg:mb-10 mx-5" >
        <h4 className='text-sky-950 font-bold mr-2'>Tech <span className='border-r-2 border-sky-500 inline-block p-2'>Stack</span></h4>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Image src={htmllogo} height={30} width={30} className="mx-2 my-2" alt="logo"/>
          <Image src={csslogo} height={30} width={30} className="mx-2 my-2"alt="logo" />
          <Image src={javascriptlogo} height={40} width={35} className="mx-2 my-2"alt="logo" />
          <Image src={nextlogo} height={50} width={40} className="mx-2 my-2" />
          <Image src={reactlogo} height={30} width={30} className="mx-2 my-2" alt="logo"/>
          <Image src={vuelogo} height={30} width={30} className="mx-2 my-2" alt="logo"/>
          <Image src={tailwindlogo} height={35} width={30} className="mx-2 my-2" alt="logo"/>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;

