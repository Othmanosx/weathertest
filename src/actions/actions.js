import axios from "axios"

const fetchF = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=metric"
      )
      .then((weather) => {
        dispatch({
          type: "FETCH",
          payload: weather.data,
          unit: "°C",
        })
      })
  }
}
const fetchC = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=imperial"
      )
      .then((weather) => {
        dispatch({
          type: "FETCH",
          payload: weather.data,
          unit: "°F",
        })
      })
  }
}
const passDayData = (data, unit) => {
  return (dispatch) => {
    dispatch({
      type: "PASS",
      payload: data,
      unit: unit,
    })
  }
}
export { fetchF, fetchC, passDayData }
