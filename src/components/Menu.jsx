import React from "react";
import StyledSliderInput from "./StyledSliderInput";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const StyledContainer = styled.div`
  width: 350px;
  border-radius: 20px;
  padding: 20px;
  padding-top: 0px;
  -webkit-box-shadow: 1px 6px 13px -6px rgba(0, 0, 0, 0.78);
  box-shadow: 1px 6px 13px -6px rgba(0, 0, 0, 0.78);
  margin: 20px;
`;

const StyledMainHeading = styled.h1`
  font-size: 20px;
`;

const Menu = ({ inputs }) => {
  return (
    <>
      <StyledContainer>
        <StyledMainHeading>Canvas Configuration</StyledMainHeading>
        {inputs.map((input) => (
          <StyledSliderInput width={300} stepValue={1} {...input} />
        ))}
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Pixel Radius"
          />
        </FormGroup>
      </StyledContainer>
      <StyledContainer>
        <StyledMainHeading>Color</StyledMainHeading>
        {inputs.map((input) => (
          <StyledSliderInput width={300} stepValue={1} {...input} />
        ))}
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Pixel Radius"
          />
        </FormGroup>
      </StyledContainer>
      <StyledContainer>
        <StyledMainHeading>Tools</StyledMainHeading>
        {inputs.map((input) => (
          <StyledSliderInput width={300} stepValue={1} {...input} />
        ))}
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Pixel Radius"
          />
        </FormGroup>
      </StyledContainer>
    </>
  );
};

export default Menu;
