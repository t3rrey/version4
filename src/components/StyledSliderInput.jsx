import react, { useState } from "react";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import styled from "styled-components";

const Heading = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: 0px;
`;

const StyledSliderInput = ({
  width,
  defaultValue,
  title,
  maxValue,
  minValue,
  stepValue,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <>
      <Heading>{title}:</Heading>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs>
          <Slider
            size="small"
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            label={title}
            variant="standard"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: stepValue,
              min: minValue,
              max: maxValue,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default StyledSliderInput;
