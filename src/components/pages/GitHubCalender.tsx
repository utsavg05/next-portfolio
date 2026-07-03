"use client";
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { ActivityCalendar, type Activity } from 'react-activity-calendar'

const USERNAME = 'utsavg05'

const theme = {
  light: ['#ebedf0', '#c2c2c2', '#8f8f8f', '#4d4d4d', '#1a1a1a'],
  dark: ['#1B1B1B', '#333333', '#666666', '#999999', '#FFFFFF'],
}

const GitHubCalender = () => {
  const [data, setData] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

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
        colorScheme={mounted && resolvedTheme === 'light' ? 'light' : 'dark'}
        blockSize={11}
        blockMargin={4}
        fontSize={13}
        labels={{ totalCount: '{{count}} contributions in the last year' }}
      />
    </section>
  )
}

export default GitHubCalender
