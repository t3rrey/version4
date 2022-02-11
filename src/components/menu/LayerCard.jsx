import React, { useContext, useCallback } from "react";
import styled from "styled-components";
import closeIcon from "../../assets/closeIcon.svg";
import addIcon from "../../assets/addIcon.svg";
import Layer from "./Layer";
import Context from "../context/context";

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
const StyledAddLayerContainer = styled.div`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: blue;
  }
`;
const StyledAddLayerButton = styled.img`
  width: 20px;
  display: block;
  margin: auto;
`;

const LayerCard = () => {
  const { state, addLayer, toggleLayer } = useContext(Context);

  return (
    <StyledContainer>
      <StyledMainHeading>Layers</StyledMainHeading>
      <StyledExitButton src={closeIcon} />
      {state.layers.map((layer, index) => (
        <Layer layer={layer} toggleLayer={() => toggleLayer(index)} />
      ))}
      <StyledAddLayerContainer onClick={addLayer}>
        <StyledAddLayerButton src={addIcon} />
      </StyledAddLayerContainer>
    </StyledContainer>
  );
};

export default LayerCard;
