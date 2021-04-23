import axios from "axios"
//  s and fail
const fetchUsers = () => {
  // console.log(1);
  return (dispatch) => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
      )
      .then((weather) => {
        console.log(weather.data)

        dispatch({
          type: "FETCH_USERS",
          payload: weather.data,
        })
      })
  }
}
export default fetchUsers
