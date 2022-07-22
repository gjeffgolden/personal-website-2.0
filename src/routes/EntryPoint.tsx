import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import NavigationLinks from "../components/NavigationLinks";

// TODO: Hamburger menu with fun animation instead of static navbar?

const Header = () => {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography>GJG</Typography>
        <NavigationLinks />
      </Box>
      <Outlet />
    </>
  );
};

export default Header;
