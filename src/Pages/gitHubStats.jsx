import React from 'react'
import {BiStats} from "react-icons/bi"
import "../styles/github.css"
export const GitHubStreak = () => {
  return (
    <div className='gitCalendar'>
      <div>
        <BiStats color="#5fe4c9" fontSize={"25px"}/>
        <h2>Git Streak</h2>
        <div></div>
      </div>
      <div>
    <div>
        <img className='gitStats' id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=vishal-git9&theme=dark&hide_border=false&border_radius=0&background=0A192F" alt="git stats" />
    </div>
    </div>
    </div>
  )
}
