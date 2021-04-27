const userReducer = (state = { all: [], days: [] }, action) => {
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
        unit: action.unit,
      }
    // no default
  }
}

export default userReducer
