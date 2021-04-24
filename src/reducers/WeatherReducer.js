const userReducer = (state = { all: [], days: [] }, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "FETCH":
      return {
        all: action.payload,
        days: action.payload.list.filter(
          (data) => data.dt_txt.split(" ")[1] === "00:00:00"
        ),
        unit: action.unit,
      }
    case "PASS":
      return {
        ...state,
        DayData: action.payload,
      }
  }
}

export default userReducer
