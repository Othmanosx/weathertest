import axios from "axios"
//  s and fail
const fetchF = () => {
  // console.log(1);
  return (dispatch) => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=metric"
      )
      .then((weather) => {
        // console.log(weather.data)

        dispatch({
          type: "FETCH",
          payload: weather.data,
          unit: "°C",
        })
      })
  }
}
const fetchC = () => {
  // console.log(1);
  return (dispatch) => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=imperial"
      )
      .then((weather) => {
        // console.log(weather.data)

        dispatch({
          type: "FETCH",
          payload: weather.data,
          unit: "°F",
        })
      })
  }
}
const passDayData = (data) => {
  return (dispatch) => {
    dispatch({
      type: "PASS",
      payload: data,
    })
  }
}
export { fetchF, fetchC, passDayData }
