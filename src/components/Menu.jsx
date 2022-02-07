import React from "react";
import StyledSliderInput from "./StyledSliderInput";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const StyledContainer = styled.div`
  width: 30%;

  border: 1px solid black;
  padding: 20px;
`;

const Menu = () => {
  return (
    <StyledContainer>
      <StyledSliderInput
        width={300}
        defaultValue={16}
        title={"Width"}
        maxValue={100}
        minValue={4}
        stepValue={1}
      />
      <StyledSliderInput
        width={300}
        defaultValue={16}
        title={"Height"}
        maxValue={100}
        minValue={4}
        stepValue={1}
      />
      <StyledSliderInput
        width={300}
        defaultValue={16}
        title={"Pixel Size"}
        maxValue={100}
        minValue={4}
        stepValue={1}
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Pixel Radius"
        />
      </FormGroup>
    </StyledContainer>
  );
};

export default Menu;
