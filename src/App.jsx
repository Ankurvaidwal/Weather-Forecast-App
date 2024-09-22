import React, { Suspense } from "react";
// import Hero from "./components/Hero";
const HeroLazy = React.lazy(() => import('./components/Hero'));
const WeeklyWeatherLazy = React.lazy(() => import('./components/WeeklyWeather'));
import NavBar from "./components/NavBar";
import WeeklyWeather from "./components/WeeklyWeather";
import { WeatherProvider } from "./providers/WeatherProvider";

export default function App() {
  return (
    <WeatherProvider>
      <div className="overflow-x-hidden bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300 h-screen">
        <NavBar />
        <Suspense fallback={<div className="flex justify-center items-center text-5xl text-white">Loading...</div>}>
          <HeroLazy />
          <WeeklyWeatherLazy />
        </Suspense>
      </div>
    </WeatherProvider>
  )
}