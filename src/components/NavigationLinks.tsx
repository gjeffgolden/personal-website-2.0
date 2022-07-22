import { NavigationLink } from "../styles/styles";

const NavigationLinks = () => {
  return (
    <nav>
      <NavigationLink to="/about">About</NavigationLink>
      <NavigationLink to="/contact">Contact</NavigationLink>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/portfolio">Portfolio</NavigationLink>
    </nav>
  );
};

export default NavigationLinks;
