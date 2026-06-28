"use client";
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ActivityCalendar, type Activity } from 'react-activity-calendar'

const USERNAME = 'utsavg05'

const theme = {
  light: ['#1e40af', '#2563eb', '#60a5fa', '#b6d4fe', '#eaf2ff'],
  dark: ['#1B1B1B', '#333333', '#666666', '#999999', '#FFFFFF'],
}

const GitHubCalender = () => {
  const [data, setData] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last&_=${Date.now()}`,
      { cache: 'no-store' }
    )
      .then((res) => res.json())
      .then((json) => {
        if (active && json?.contributions) setData(json.contributions as Activity[])
      })
      .catch(() => {})
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [])

  return (
    <section id="github" className="w-full max-w-4xl mx-auto px-6 py-6">
      <motion.h2
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-serif tracking-tight text-primary mb-8"
      >
        GitHub Activity
      </motion.h2>

      <ActivityCalendar
        data={data}
        loading={loading}
        theme={theme}
        colorScheme="dark"
        blockSize={11}
        blockMargin={4}
        fontSize={13}
        labels={{ totalCount: '{{count}} contributions in the last year' }}
      />
    </section>
  )
}

export default GitHubCalender
