import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navigation from "../components/Navigation";

// MVP TODO:
// - Media Queries and/or responsive styling

// STRETCH TODO:
// - TransitionGroup experiment with Home page
// - Color of quote on homepage
// - Add Button for Project cards on Portfolio page

const Header = () => {
  return (
    <Box height="100vh" width="100vw">
      <Navigation />
      <Outlet />
    </Box>
  );
};

export default Header;
