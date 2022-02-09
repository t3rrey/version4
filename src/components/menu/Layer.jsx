import React, { useState } from "react";
import styled from "styled-components";
import eyeIcon from "../../assets/eyeIcon.svg";
import dashedSquareIcon from "../../assets/dashedSquareIcon.svg";
const LayerContainer = styled.div`
  width: 95%;
  height: 30px;
  border-bottom: 1px solid gray;
  display: flex;
  cursor: pointer;
`;
const StyledVisibleIcon = styled.img`
  width: 20px;
  margin-left: 5px;
`;
const StyledLayerNameContainer = styled.div`
  flex-grow: 1;
`;
const StyledLayerName = styled.p`
  margin: 0px;
  line-height: 30px;
  text-align: center;
  font-weight: normal;
`;
const StyledLayerNameInput = styled.input`
  width: 100%;
  border: 2px solid blue;
  padding: 4px;
`;

const Layer = ({ layerName }) => {
  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState(layerName);
  const [visibleLayer, setVisibleLayer] = useState(true);

  function toggleInput() {
    setToggle(!toggle);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  const handleHideLayer = () => {
    setVisibleLayer(!visibleLayer);
  };

  return (
    <LayerContainer>
      {visibleLayer ? (
        <StyledVisibleIcon src={eyeIcon} onClick={handleHideLayer} />
      ) : (
        <StyledVisibleIcon src={dashedSquareIcon} onClick={handleHideLayer} />
      )}
      <StyledLayerNameContainer>
        {toggle ? (
          <StyledLayerName onDoubleClick={toggleInput}>{text}</StyledLayerName>
        ) : (
          <form onSubmit={toggleInput}>
            <StyledLayerNameInput
              type="text"
              value={text}
              onChange={handleChange}
            />
          </form>
        )}
      </StyledLayerNameContainer>
    </LayerContainer>
  );
};

export default Layer;
