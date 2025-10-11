"use client"

import { useState, useEffect } from "react"
import styles from "./MontrealInfo.module.scss"

const weatherMap: Record<number, string> = {
  0: "Clear",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime Fog",
  51: "Light Drizzle",
  61: "Light Rain",
  71: "Light Snow",
  95: "Thunderstorm",
  // ...add others if needed
}

export default function MontrealInfo() {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [weather, setWeather] = useState("Loading...")

  useEffect(() => {
    // Function to get GMT offset for Montreal
    const getMontrealGMTOffset = () => {
      const now = new Date()
      const montrealTime = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Montreal" }),
      )
      const utcTime = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }))

      // Calculate offset in minutes
      const offsetMinutes =
        (montrealTime.getTime() - utcTime.getTime()) / (1000 * 60)

      // Format offset as GMT±HH:MM
      const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60)
      const offsetMins = Math.abs(offsetMinutes) % 60
      const sign = offsetMinutes >= 0 ? "+" : "-"

      return `GMT${sign}${offsetHours.toString().padStart(2, "0")}:${offsetMins.toString().padStart(2, "0")}`
    }

    // Function to format date in YYYY MM DD format
    const getMontrealDate = () => {
      const now = new Date()
      const montrealTime = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Montreal" }),
      )

      const year = montrealTime.getFullYear()
      const month = (montrealTime.getMonth() + 1).toString().padStart(2, "0")
      const day = montrealTime.getDate().toString().padStart(2, "0")

      return `${year} ${month} ${day}`
    }

    // Update time and date every second
    const updateTimeAndDate = () => {
      const now = new Date()
      const montrealTime = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Montreal" }),
      )
      const timeString = montrealTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      setTime(`${timeString} ${getMontrealGMTOffset()}`)
      setDate(getMontrealDate())
    }

    // Initial time and date update
    updateTimeAndDate()

    // Update every second
    const interval = setInterval(updateTimeAndDate, 1000)

    // Fetch weather (you'll need to add your API key)
    const fetchWeather = async () => {
      try {
        // Replace with your OpenWeatherMap API key
        const API_KEY = "your_api_key_here"
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=45.5088&longitude=-73.5878&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code&timezone=America%2FNew_York`,
        )
        const data = await response.json()

        // console.log(data.current);

        if (data.current) {
          const temp = Math.round(data.current.temperature_2m)
          const condition = weatherMap[data.current.weather_code]
          // const condition = data.current.weather_code;
          setWeather(`${temp}°C (${condition})`)
        }
      } catch (error) {
        console.error("Weather fetch error:", error)
        setWeather("Weather unavailable")
      }
    }

    fetchWeather()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`${styles.infoContainer}`}>
      <span>Montreal</span>
      <span>{weather}</span>
      <span>{date}</span>
      <span>{time}</span>
    </div>
  )
}
