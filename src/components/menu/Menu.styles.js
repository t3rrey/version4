import styled from "styled-components";

export const StyledContainer = styled.div `
  width: 350px;
  border-radius: 20px;
  padding: 20px;
  padding-top: 0px;
  -webkit-box-shadow: 1px 6px 13px -6px rgba(0, 0, 0, 0.78);
  box-shadow: 1px 6px 13px -6px rgba(0, 0, 0, 0.78);
  margin: 20px;
`;

export const StyledMainHeading = styled.h1 `
  font-size: 20px;
  padding-top: 10px;
`;
export const StyledHeadingContainer = styled.div `
  display: flex;
`;

export const StyledColorInput = styled.input `
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

export const StyledColorInfo = styled.div `
  display: flex;
  width: 150px;
  height: 30px;
  margin-top: 10px;
  background-color: red;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const StyledExitButton = styled.img `
  width: 20px;
  height: 20px;
  position: absolute;
  left: 342px;
  transform: translateY(-36px);
`;

export const StyledHistoryContainer = styled.div `
  display: flex;
`;

export const StyledColorHistory = styled.div `
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
`;

export const contentContainer = styled.div `
  display: none;
`;