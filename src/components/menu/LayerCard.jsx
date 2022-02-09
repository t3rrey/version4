import React from "react";
import styled from "styled-components";
import closeIcon from "../../assets/closeIcon.svg";
import Layer from "./Layer";
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
const StyledExitButton = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 342px;
  transform: translateY(-36px);
`;

const LayerCard = () => {
  return (
    <StyledContainer>
      <StyledMainHeading>Layers</StyledMainHeading>
      <StyledExitButton src={closeIcon} />
      <Layer layerName={"Test Layer"} />
    </StyledContainer>
  );
};

export default LayerCard;
