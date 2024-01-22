"use client";
import AboutComponent from '../pages/Component/AboutComponent'
import ContactComponent from '../pages/Component/ContactComponent'
import Footer from '../pages/Component/Footer'
import HomeComponent from '../pages/Component/HomeComponent'
import NavbarComponent from '../pages/Component/NavbarComponent'
import ProjectsComponent from '../pages/Component/ProjectsComponent'

export default function Home() {
  return (
    
      <div>
        <NavbarComponent/>
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
        <Footer/>
      </div>
    
  )
}
