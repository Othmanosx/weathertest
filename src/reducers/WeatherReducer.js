const userReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      state = action.payload
      return state
    default:
      return state
  }
}

export default userReducer
