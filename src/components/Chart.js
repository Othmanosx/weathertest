import React from "react"
import { Typography, Box } from "@material-ui/core"
import { Bar } from "react-chartjs-2"
import { useSelector } from "react-redux"

const VerticalBar = () => {
  const state = useSelector((state) => state)
  const data = {
    labels: [
      "00:00",
      "03:00",
      "06:00 ",
      "09:00",
      "12:00",
      "15:00",
      "18:00",
      "21:00",
    ],
    datasets: [
      {
        label: `Temp of the day ${state.unit}`,
        data: state.all.list
          .filter((day) => day.dt >= state.DayData)
          .slice(0, 8)
          .map((item) => item.main.temp),
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
  const handleDate = (date) => {
    const event = new Date(date * 1000)
    return event.toDateString()
  }
  if (state.DayData) {
    return (
      <Box className="chart">
        <Typography className="title">
          Hourly forecast for {handleDate(state.DayData)}
        </Typography>
        <Bar data={data} options={options} />
      </Box>
    )
  } else {
    return (
      <Box className="chartText">
        <Typography variant="h5">
          Click on MORE INFO button to view hourly forecast
        </Typography>
      </Box>
    )
  }
}

export default VerticalBar
