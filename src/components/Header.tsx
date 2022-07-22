import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Outlet } from "react-router-dom";

import { NavigationLink } from "../styles/styles";

// TODO: Hamburger menu with fun animation instead of static navbar?

const Header = () => {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography>GJG</Typography>
        <nav>
          <NavigationLink to="/about">About</NavigationLink>
          <NavigationLink to="/contact">Contact</NavigationLink>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/portfolio">Portfolio</NavigationLink>
        </nav>
      </Box>
      <Outlet />
    </>
  );
};

export default Header;
