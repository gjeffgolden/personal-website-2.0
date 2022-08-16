import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import {
  StyledNavigationGroup,
  StyledNavigationLink,
  StyledNavigationLinkWithBorder,
} from "../styles/styles";

const NavigationLinks = () => {
  return (
    <>
      <StyledNavigationGroup>
        <StyledNavigationLink to="/about">About</StyledNavigationLink>
        <StyledNavigationLink to="/contact">Contact</StyledNavigationLink>
        <StyledNavigationLink to="/tech">Portfolio</StyledNavigationLink>
        <StyledNavigationLinkWithBorder
          to="src/assets/Golden.Resume.pdf"
          target="_blank"
          download
        >
          Resume
        </StyledNavigationLinkWithBorder>
      </StyledNavigationGroup>
    </>
  );
};

export default NavigationLinks;
