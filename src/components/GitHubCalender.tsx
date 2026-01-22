import React from 'react'
import { GitHubCalendar } from 'react-github-calendar'

const GitHubCalender = () => {
  const gitHubTheme = {
    // light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    // light: ['#ebedf0', '#d0d7de', '#8c959f', '#57606a', '#24292f'],
    light: [
      '#1e40af',
      '#2563eb',
      '#60a5fa',
      '#b6d4fe',
      '#eaf2ff',
    ]
    ,


    // dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'] // GitHub dark mode colors
    dark: ['#1B1B1B', '#333333', '#666666', '#999999', '#FFFFFF'],
    // dark: ['#1f1f1f', '#2b2b2b', '#5a5a5a', '#a3a3a3', '#ffffff',]

  };
  return (
    <section
      id="github"
      className="w-full max-w-4xl mx-auto px-6 pt-2 pb-4 mb-21 md:mb-11"
    >
      <GitHubCalendar username="utsavg05" theme={gitHubTheme} />
    </section>
  )
}

export default GitHubCalender