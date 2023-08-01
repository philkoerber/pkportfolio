
import NavBar from './components/NavBar'
import ScrollProgress from './components/ScrollProgress'
import Home from './components/Home'
import Projects from './components/Projects'
import CV from './components/CV'
import Contact from './components/Contact'
import Background from './components/Background'
import {useMotionValueEvent, useScroll, useSpring} from "framer-motion"

function App() {

  const setPage = (page) => {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
    }
  }

  const { scrollYProgress } = useScroll()

    
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    })
  

  return (
    <>
    <div className="w-screen max-w-[1080px] mx-auto">
      
      <div id='NAVBAR'><NavBar setPage={(p) => {setPage(p)}} /></div>
      <div id='ABOUT ME'><Home/></div>
      <div id='PROJECTS'><Projects/></div>
      <div id='RESUME'><CV /></div>
      <div id='CONTACT'><Contact /></div>
      
        <Background color={"#00BBF9"} />
        <Background color={"#008AB8"} />
        
      
      
      
    </div>
      <ScrollProgress setPage={() => { setPage("NAVBAR") }} scrollYProgress={scrollYProgress} />
      </>
  )
}

export default App
