import AboutComponent from './Component/AboutComponent'
import ContactComponent from './Component/ContactComponent'
import HomeComponent from './Component/HomeComponent'
import NavbarComponent from './Component/NavbarComponent'
import ProjectsComponent from './Component/ProjectsComponent'

export default function Home() {
  return (
    <main>
      <div>
        <NavbarComponent/>
        <HomeComponent/>
        <AboutComponent/>
        <ProjectsComponent/>
        <ContactComponent/>
      </div>
    </main>
  )
}
