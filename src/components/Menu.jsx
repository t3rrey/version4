import React, { useState, useEffect } from "react";
import StyledSliderInput from "./StyledSliderInput";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import closeIcon from "../assets/closeIcon.svg";
import useDebounce from "../hooks/useDebounce";
import LayerCard from "./menu/LayerCard";

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
  padding-top: 10px;
`;
const StyledHeadingContainer = styled.div`
  display: flex;
`;

const StyledColorInput = styled.input`
margin-left: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 50px;
  height 50px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  ::-webkit-color-swatch {
    border: none;
    padding: 3px;
    border-radius: 10px;
  }
  ::-moz-color-swatch {
    border: none;
    padding: 3px;
    border-radius: 10px;
  }
`;

const StyledColorInfo = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  margin-top: 10px;
  background-color: red;
  color: white;
  justify-content: center;
  align-items: center;
`;

const StyledExitButton = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 342px;
  transform: translateY(-36px);
`;

const StyledHistoryContainer = styled.div`
  display: flex;
`;

const StyledColorHistory = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 5px;
`;

const Menu = ({ inputs }) => {
  const [currentColor, setCurrentColor] = useState("#000000");
  const debounceColor = useDebounce(currentColor, 1000);
  const [colorHistory, setColorHistory] = useState([currentColor]);

  const handleChangeColor = () => {
    setColorHistory(updateColorHistory(debounceColor, colorHistory));
    console.log(currentColor);
    console.log(colorHistory);
  };

  const updateColorHistory = (newColor, colorHistory) => {
    let newHistory = colorHistory;
    newHistory.push(newColor);
    return newHistory;
  };
  useEffect(() => {
    if (debounceColor) {
      const handleChangeColor = () => {
        setColorHistory(updateColorHistory(debounceColor, colorHistory));
        console.log(currentColor);
        console.log(colorHistory);
      };

      const updateColorHistory = (newColor, colorHistory) => {
        let newHistory = colorHistory;
        if (newColor === newHistory[newHistory.length - 1]) {
          return newHistory;
        }
        if (newHistory.length > 4) {
          newHistory.splice(0, 1);
          newHistory.push(newColor);
          return newHistory;
        }
        newHistory.push(newColor);
        return newHistory;
      };
      handleChangeColor();
    }
  }, [debounceColor]);
  return (
    <>
      <StyledContainer>
        <StyledMainHeading>Canvas Configuration</StyledMainHeading>
        <StyledExitButton src={closeIcon} />
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
        <StyledMainHeading>Colors</StyledMainHeading>
        <StyledExitButton src={closeIcon} />
        <StyledHeadingContainer>
          <StyledColorInput
            type="color"
            onChange={(e) => setCurrentColor(e.target.value)}
          />
          <StyledColorInfo style={{ background: currentColor }}>
            {currentColor}
          </StyledColorInfo>
        </StyledHeadingContainer>

        <StyledHistoryContainer>
          {colorHistory.map((history) => (
            <StyledColorHistory
              style={{ background: history }}
              onClick={(e) => setCurrentColor(history)}
            ></StyledColorHistory>
          ))}
        </StyledHistoryContainer>
      </StyledContainer>
      <LayerCard />
    </>
  );
};

export default Menu;
