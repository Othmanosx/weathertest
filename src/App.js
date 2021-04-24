import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Carousel from "react-multi-carousel"
import LinearProgress from "@material-ui/core/LinearProgress"

import "react-multi-carousel/lib/styles.css"
import { fetchF, fetchC } from "./actions/actions"
import Weather from "./components/WeatherCard"
import Radio from "./components/Radio"
import Chart from "./components/Chart"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
}

export default function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const [selectedValue, setSelectedValue] = useState("a")

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  useEffect(() => {
    switch (selectedValue) {
      case "b":
        dispatch(fetchC())
        break
      case "a":
        dispatch(fetchF())
        break
      default:
        dispatch(fetchC())
        break
    }
    // eslint-disable-next-line
  }, [selectedValue])

  return (
    <div className="App">
      {!state ? (
        <div className="loading">
          <h1>
            Loading...
            <LinearProgress color="secondary" />
          </h1>
        </div>
      ) : (
        <>
          <Radio selectedValue={selectedValue} handleChange={handleChange} />
          <Carousel className="table" responsive={responsive}>
            {
              // eslint-disable-next-line
              state.days.map((data) => {
                if (data.dt_txt.split(" ")[1] === "00:00:00")
                  return (
                    <div key={data.dt} className="weather">
                      <Weather
                        date={data.dt}
                        status={data.weather[0].main}
                        temp={Math.round(data.main.temp)}
                        unit={state.unit}
                      />
                    </div>
                  )
              })
            }
          </Carousel>
          <Chart />
        </>
      )}
    </div>
  )
}
