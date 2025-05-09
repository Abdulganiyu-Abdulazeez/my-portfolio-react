import LandingPage from './component/LandingPage'
import About from './component/About';
import Skill from './component/Skill';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Projects from './component/project';
import AOS from 'aos';
import 'aos/dist/aos.css'
function App() {
  AOS.init()
  return (
    <>
      <LandingPage />
      <About />
      <Skill />
      <Resume />
      <Projects />
      <Contact />
    </>
  )
}

export default App;
