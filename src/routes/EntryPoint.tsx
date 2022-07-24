import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavigationLinks from "../components/NavigationLinks";
import { NavigationLink } from "../styles/styles";

const Header = () => {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <NavigationLink to="/">GJG</NavigationLink>
        <NavigationLinks />
      </Box>
      <Outlet />
    </>
  );
};

export default Header;
