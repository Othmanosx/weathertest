import React from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"

export default function RadioComponent({ handleChange, selectedValue }) {
  return (
    <RadioGroup
      className="radio"
      row
      aria-label="position"
      name="position"
      defaultValue="top"
    >
      <FormControlLabel
        value="C"
        control={
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        }
        label="Celsius"
      />
      <FormControlLabel
        value="F"
        control={
          <Radio
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
            name="radio-button-demo"
            inputProps={{ "aria-label": "B" }}
          />
        }
        label="Fahrenheit"
      />
    </RadioGroup>
  )
}
