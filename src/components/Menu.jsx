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
// const updateWidth = () => {
//   controllerRef.current = new GUI();
//   const CONFIGURATION = controllerRef.current.addFolder("Configuration");
//   CONFIGURATION.add(CONFIG, "height", 2, 100, 1)
//     .onFinishChange((value) => {
//       if (
//         value !== heightRef.current &&
//         window.confirm(
//           "Are you sure? Making this change will wipe your current canvas."
//         )
//       ) {
//         cellRef.current = [
//           ...new Array(CONFIG.height * CONFIG.width).fill().map(() => ({})),
//         ];
//         setHeight(value);
//         heightRef.current = value;
//         saveToStorage();
//         // setShadow(null)
//       }
//     })
//     .name("Canvas height");
// };
const Menu = () => {
  return (
    <StyledContainer>
      <StyledMainHeading>Canvas Configuration</StyledMainHeading>
      <StyledSliderInput
        width={300}
        defaultValue={16}
        title={"Width"}
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
