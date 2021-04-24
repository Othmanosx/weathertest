import React from "react"
import { Bar } from "react-chartjs-2"
import { useSelector } from "react-redux"

const data = {
  labels: [
    "00:00 AM",
    "03:00 AM",
    "06:00 AM",
    "09:00 AM",
    "12:00 AM",
    "15:00 AM",
  ],
  datasets: [
    {
      label: "Temp of the day",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const VerticalBar = () => {
  const DayData = useSelector((state) => state.DayData)
  if (DayData) {
    return (
      <div className="chart">
        <h1 className="title">Forecast</h1>
        <Bar data={data} options={options} />
      </div>
    )
  } else {
    return (
      <div className="chartText">
        <h2>Click on MORE INFO button to view hourly forecast</h2>
      </div>
    )
  }
}

export default VerticalBar
