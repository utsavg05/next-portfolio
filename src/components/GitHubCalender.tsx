import React from 'react'
import { GitHubCalendar } from 'react-github-calendar'

const GitHubCalender = () => {
  return(
    <section
      id="github"
      className="w-full max-w-4xl mx-auto px-6 pt-2 pb-4 mb-21 md:mb-11"
    >
    <GitHubCalendar username="utsavg05" />
    </section>
  ) 
}

export default GitHubCalender