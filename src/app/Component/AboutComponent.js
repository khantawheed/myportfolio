import React from 'react';
import aboutme from "../image/aboutme.jpg";
import Image from "next/image";


const AboutComponent = () => {
  
  return (
    
    <div>
      
      <div id="about" className="container mx-auto flex flex-row items-center justify-center my-20 bg-white p-8 mb-14">
        {/* Centered container for the content */}
         
        {/* Photo on the left */}
        <div className="mr-10">
          <Image
            src={aboutme}
            alt="Your Photo"
            width={350}
            height={850}
            className="rounded-lg"
          />
        </div>

        {/* Description on the right */}
        <div className="w-5/12">
          <h1 className="text-xl font-bold mb-2 text-sky-500">About Me</h1>
          <p className="text-base mb-2 text-sky-950">
            Hello, I'm Tawheed Khan, a frontend developer based in Colchester. I recently completed my Master's in Advanced Computer Science from the University of Essex, and I bring over a year of experience working with React and Next.js.
          </p>
          <p className="text-base mb-2 text-sky-950">
            I am passionate about creating dynamic and user-friendly web applications. My academic background and professional experience have equipped me with the skills to deliver high-quality, efficient, and visually appealing solutions. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
