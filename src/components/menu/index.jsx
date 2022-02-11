import React, { useState, useEffect, useContext } from "react";
import StyledSliderInput from "./StyledSliderInput";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import closeIcon from "../../assets/closeIcon.svg";
import useDebounce from "../../hooks/useDebounce";
import LayerCard from "./LayerCard";
import Context from "../context/context";
import {
  StyledHeadingContainer,
  StyledMainHeading,
  StyledContainer,
  StyledColorInfo,
  StyledColorInput,
  StyledColorHistory,
  StyledExitButton,
  StyledHistoryContainer,
  ContentContainer,
} from "./Menu.styles";

const Menu = ({ inputs, layers, setLayers }) => {
  const { setOption } = useContext(Context);
  const [currentColor, setCurrentColor] = useState("#000000");
  const debounceColor = useDebounce(currentColor, 1000);
  const [colorHistory, setColorHistory] = useState([currentColor]);
  const [visible, setVisible] = useState(true);

  const updateColorHistory = (newColor, colorHistory) => {
    let newHistory = colorHistory;
    newHistory.push(newColor);
    return newHistory;
  };

  const handleHideElement = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setOption("color", currentColor);
  }, [currentColor]);

  useEffect(() => {
    if (debounceColor) {
      const handleChangeColor = () => {
        setColorHistory(updateColorHistory(debounceColor, colorHistory));
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
        <StyledExitButton src={closeIcon} onClick={handleHideElement} />
        {visible ? (
          <ContentContainer>
            {inputs.map((input) => (
              <StyledSliderInput width={300} stepValue={1} {...input} />
            ))}
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Pixel Radius"
              />
            </FormGroup>
          </ContentContainer>
        ) : (
          <></>
        )}
      </StyledContainer>

      <StyledContainer>
        <StyledMainHeading>Colors</StyledMainHeading>
        <StyledExitButton src={closeIcon} onClick={handleHideElement} />
        <StyledHeadingContainer>
          <StyledColorInput
            type="color"
            value={currentColor}
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

      <LayerCard layers={layers} setLayers={setLayers} />
    </>
  );
};

export default Menu;
