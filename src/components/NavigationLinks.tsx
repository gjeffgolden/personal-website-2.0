import { StyledNavigationGroup, StyledNavigationLink } from "../styles/styles";

const NavigationLinks = () => {
  return (
    <StyledNavigationGroup>
      <StyledNavigationLink to="/about">About</StyledNavigationLink>
      <StyledNavigationLink to="/contact">Contact</StyledNavigationLink>
      <StyledNavigationLink to="/tech">Portfolio</StyledNavigationLink>
      <StyledNavigationLink
        to="src/assets/Golden.Resume.pdf"
        target="_blank"
        download
      >
        Resume
      </StyledNavigationLink>
    </StyledNavigationGroup>
  );
};

export default NavigationLinks;
