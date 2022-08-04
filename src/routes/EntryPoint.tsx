import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavigationLinks from "../components/NavigationLinks";
import { StyledNavigationLink } from "../styles/styles";

// TODO: Media Queries and/or responsive styling
// TODO: TransitionGroup experiment with Home page
// TODO: Color of quote on homepage
// TODO: Finalize logos on Portfolio page
// TODO: Add Button for Project cards on Portfolio page

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
