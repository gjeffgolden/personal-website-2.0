import { NavigationGroup, NavigationLink } from "../styles/styles";

const NavigationLinks = () => {
  return (
    <NavigationGroup>
      <NavigationLink to="/about">About</NavigationLink>
      <NavigationLink to="/contact">Contact</NavigationLink>
      <NavigationLink to="/portfolio">Portfolio</NavigationLink>
    </NavigationGroup>
  );
};

export default NavigationLinks;
