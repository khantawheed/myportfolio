import React from 'react'
import aboutme from "../image/aboutme.jpg"
import Image from "next/image"
const ProjectsComponent = () => {
  return (
    <div>
      <div id="projects" className="h-fit flex-col bg-stone-200 container my-20 ">
      <h1 className="text-xl font-bold mx-48 pt-14 text-sky-500">Projects</h1>
        <div id="about" className="flex flex-row items-center justify-center p-8">
        
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
            <p className="text-base mb-2 text-sky-950">
              Hello, I'm Tawheed Khan, a frontend developer based in Colchester. I recently completed my Master's in Advanced Computer Science from the University of Essex, and I bring over a year of experience working with React and Next.js.
            </p>
            <p className="text-base mb-2 text-sky-950">
              I am passionate about creating dynamic and user-friendly web applications. My academic background and professional experience have equipped me with the skills to deliver high-quality, efficient, and visually appealing solutions. Let's build something amazing together!
            </p>
          </div>
        </div>
        
        <div id="about" className="flex flex-row items-center justify-center p-8 ">
        
          <div className="w-6/12 mr-10">
              <p className="text-base mb-2 text-sky-950">
                Hello, I'm Tawheed Khan, a frontend developer based in Colchester. I recently completed my Master's in Advanced Computer Science from the University of Essex, and I bring over a year of experience working with React and Next.js.
              </p>
              <p className="text-base mb-2 text-sky-950">
                I am passionate about creating dynamic and user-friendly web applications. My academic background and professional experience have equipped me with the skills to deliver high-quality, efficient, and visually appealing solutions. Let's build something amazing together!
              </p>
            </div>
            <div className="">
              
                <Image
                  src={aboutme}
                  alt="Your Photo"
                  width={350}
                  height={850}
                  className="rounded-lg"
                />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectsComponent
