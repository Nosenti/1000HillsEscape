import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const StyledName = styled.div`
  color: grey;
  text-align: center;
  margin-top: -4rem;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-dark.png";

  return (
    <>
      <StyledLogo>
        <Img src={src} alt="Logo" />
      </StyledLogo>
      <StyledName>1000 Hills Escape</StyledName>
    </>
  );
}

export default Logo;
