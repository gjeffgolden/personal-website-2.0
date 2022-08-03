import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavigationLinks from "../components/NavigationLinks";
import { StyledNavigationLink } from "../styles/styles";

const Header = () => {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <StyledNavigationLink to="/">GJG</StyledNavigationLink>
        <NavigationLinks />
      </Box>
      <Outlet />
    </>
  );
};

export default Header;
