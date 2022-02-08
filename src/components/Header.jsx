import React from "react";
import styled from "styled-components";
import downloadIcon from "../assets/downloadIcon.svg";
import uploadIcon from "../assets/uploadIcon.svg";
const StyledHeader = styled.nav`
  width: 100%;
  height: 50px;
  background: black;
  display: flex;
`;

const StyledFunctionButton = styled.div`
  display: block;
`;

const StyledImg = styled.img`
  margin: 15px;
  width: 20px;
`;
const Header = () => {
  return (
    <StyledHeader>
      <StyledFunctionButton>
        <StyledImg src={downloadIcon} />
      </StyledFunctionButton>
      <StyledFunctionButton>
        <StyledImg src={uploadIcon} />
      </StyledFunctionButton>
      <StyledFunctionButton></StyledFunctionButton>
    </StyledHeader>
  );
};

export default Header;
