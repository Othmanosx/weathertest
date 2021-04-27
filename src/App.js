import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Carousel from "react-multi-carousel"
import LinearProgress from "@material-ui/core/LinearProgress"
import { Typography, Box } from "@material-ui/core"
import "react-multi-carousel/lib/styles.css"
import { fetchF, fetchC } from "./actions/actions"
import Weather from "./components/WeatherCard"
import Radio from "./components/Radio/Radio"
import Chart from "./components/Chart"

const responsive = {
  superLargeDesktop: {
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

  const [selectedValue, setSelectedValue] = useState("b")

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
        dispatch(fetchF())
        break
    }
  }, [selectedValue, dispatch])

  return (
    <>
      {!state ? (
        <Box className="loading">
          <Typography variant="h3">
            Loading...
            <LinearProgress color="secondary" />
          </Typography>
        </Box>
      ) : (
        <>
          <Radio selectedValue={selectedValue} handleChange={handleChange} />
          <Carousel className="table" responsive={responsive}>
            {state.days.map((data) =>
              data.dt_txt.split(" ")[1] === "00:00:00" ? (
                <Box key={data.dt} className="weather">
                  <Weather
                    date={data.dt}
                    status={data.weather[0].main}
                    temp={Math.round(data.main.temp)}
                    unit={state.unit}
                  />
                </Box>
              ) : null
            )}
          </Carousel>
          <Chart />
        </>
      )}
    </>
  )
}
