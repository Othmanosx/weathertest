const userReducer = (state = { all: [], days: [] }, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        all: action.payload,
        days: action.payload.list.filter(
          (data) => data.dt_txt.split(" ")[1] === "00:00:00"
        ),
      }
  }
}

export default userReducer
