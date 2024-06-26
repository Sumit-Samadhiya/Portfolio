import './App.css';
// color 5fe4c9
import { Projects } from './Pages/Projects';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Skills } from './Pages/Skills';
import { Contact } from './Pages/Contact';
import rocket from "./Images/LogoLoader.gif"
import ParticlesBubble from './particles/Particles';
import { useEffect, useState } from 'react';
import { GithubCale } from './Pages/GithubCalendar';
import { GitLanguages } from './Pages/gitLanguages';
import { GitHubStreak } from './Pages/gitHubStats';
import { GitHubStats } from './Pages/gitStats';
function App() {
  const [loader,setLoader] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  })
  return loader? <div className='loader'>
    <div>
    <img src={rocket} alt="loader"/>
    </div>
  </div>:(
    <div className="App">
      <ParticlesBubble/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      
      <Contact/>
      <div>
        Designed & Developed by Sumit Samadhiya.
      </div>
    </div>
  );
}

export default App;
