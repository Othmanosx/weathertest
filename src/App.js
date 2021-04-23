import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import fetchUsers from "./actions/actions"
import Weather from "./components/WeatherCard"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    // if(state.all){setdays(state.list.filter((data) => data.dt_txt.split(" ")[1] === "00:00:00"))}
    if(state){console.log(state)}
    // eslint-disable-next-line
  }, [state])

  return (
    <div className="App">
      {!state ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <Carousel responsive={responsive}>
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
                    />
                  </div>
                )
            })
          }
        </Carousel>
      )}
    </div>
  )
}
