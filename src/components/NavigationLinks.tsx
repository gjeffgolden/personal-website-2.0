import { StyledNavigationGroup, StyledNavigationLink } from "../styles/styles";

import ResumeButton from "./ResumeButton";

const NavigationLinks = () => {
  return (
    <>
      <StyledNavigationGroup aria-label="Main">
        <StyledNavigationLink to="/about">About</StyledNavigationLink>
        <StyledNavigationLink to="/contact">Contact</StyledNavigationLink>
        <StyledNavigationLink to="/tech">Portfolio</StyledNavigationLink>
        <ResumeButton />
      </StyledNavigationGroup>
    </>
  );
};

export default NavigationLinks;
