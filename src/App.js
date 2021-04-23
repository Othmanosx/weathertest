import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import fetchUsers from "./actions/actions"

export default function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      {!state.list ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        state.list.map((data) => (
          <h3 key={data.dt}>
            <p>{data.dt}</p>
          </h3>
        ))
      )}
    </div>
  )
}
