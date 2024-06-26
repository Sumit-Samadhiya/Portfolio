import React from "react";
import { useState } from "react";
import { useParallax} from "react-scroll-parallax";
import  "../styles/skills.css";
import {FaReact,FaHtml5} from "react-icons/fa"
import {BiCode} from "react-icons/bi"
import {SiRedux,SiMaterialui,SiCss3,SiJavascript,SiChakraui,SiBootstrap,SiTailwindcss,SiDjango, SiMysql, SiPhp} from "react-icons/si"
export const Skills = () => {
  const [disabled,setDisabled] = useState(false)
    const {ref} = useParallax({
        easing: 'easeOutQuad',
        translateX: [100, 0],
        endScroll:100,
        onExit:(element)=>setDisabled(true),
        onEnter:(element)=>console.log(element),
        disabled:disabled?true:false
      });
      const parallax = useParallax({
        easing: 'easeOutQuad',
        translateX: [100, 0],
        endScroll:100,
        onExit:(element)=>setDisabled(true),
        onEnter:(element)=>console.log(element),
        disabled:disabled?true:false
      });
      const parallax2 = useParallax({
        easing: 'easeOutQuad',
        translateX: [100, 0],
        endScroll:100,
        onExit:(element)=>setDisabled(true),
        onEnter:(element)=>console.log(element),
        disabled:disabled?true:false
      });
      return (
        <div className={"Skills"} id="skills">
            <div>
          <BiCode color="#5fe4c9" fontSize={"30px"}/>
          <h2>Skills</h2>
          <div></div>
        </div>
        <div>
        <div ref={parallax.ref}>
          <div className={"skills-card"}><FaHtml5 color="#EA5626" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#EA5626"}} className="skills-card-name">HTML</p>
          </div>
          <div className={"skills-card"}><SiCss3 color="#2DACD7" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#2DACD7"}} className="skills-card-name">CSS</p>
          </div>
          <div className={"skills-card"}><SiJavascript color="#FED839" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#FED839"}} className="skills-card-name">Javascript</p>
          </div>
          <div className={"skills-card"}><SiBootstrap color="#319795" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#319795"}} className="skills-card-name">Bootstrap</p>
          </div>
          
          
        </div>
        <div ref={parallax2.ref}>
          <div className={"skills-card"}><FaReact color="#5ED3F3" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#5ED3F3"}} className="skills-card-name">React</p>
          </div>
          <div className={"skills-card"}><SiRedux color="#7248B6" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#7248B6"}} className="skills-card-name">Redux</p>
          </div>
        
          <div className={"skills-card"}><SiChakraui color="#319795" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#319795"}} className="skills-card-name">ChakraUI</p>
          </div>

          <div className={"skills-card"}><SiMaterialui color="#319795" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#319795"}} className="skills-card-name">MaterialUI</p>
          </div>
          
          
        </div>
        <div ref={ref}>
        <div className={"skills-card"}><SiTailwindcss color="#319795" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#319795"}} className="skills-card-name">Tailwindcss</p>
        </div>
        <div className={"skills-card"}><SiMysql color="#319795" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#319795"}} className="skills-card-name">MYSQL</p>
          </div>
          <div className={"skills-card"}><SiPhp color="#319795" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#319795"}} className="skills-card-name">Php</p>
          </div>
        <div className={"skills-card"}><SiDjango color="#319795" className="skills-card-img" fontSize={"50px"}/>
          <p style={{color:"#319795"}} className="skills-card-name">Django</p>
          </div>
        </div>
        </div>
        </div>
      );
    }
