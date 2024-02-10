"use client";
import AboutComponent from '@/component/AboutComponent';
import ContactComponent from '@/component/ContactComponent'
import HomeComponent from '@/component/HomeComponent'
import ProjectsComponent from '@/component/ProjectsComponent'

export default function Home() {
  return (
    
      <div>
      
        <main>
          <div id='home'>
            <HomeComponent/>
          </div>
          <div id='projects'>
            <ProjectsComponent/>
          </div>
          <div id='about'>
            <AboutComponent/>
          </div>
          <div id='contact'>
            <ContactComponent/>
          </div>
        </main>
       
      </div>
    
  )
}
