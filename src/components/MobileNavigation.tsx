import { useState } from "react";

import { StyledHamburgerMenu, StyledNavigationLink } from "../styles/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    return setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <StyledHamburgerMenu size="large" onClick={toggleDrawer}>
        <MenuIcon fontSize="large" />
      </StyledHamburgerMenu>
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
      >
        <Box
          display="flex"
          height="100%"
          width="100%"
          flexDirection="column"
          sx={theme => ({
            backgroundColor: theme.palette.background.default,
            borderWidth: "0px 0px 0px 2px",
            borderColor: theme.palette.secondary.main,
            borderStyle: "inset",
          })}
        >
          <StyledNavigationLink to="/about">About</StyledNavigationLink>
          <StyledNavigationLink to="/contact">Contact</StyledNavigationLink>
          <StyledNavigationLink to="/tech">Portfolio</StyledNavigationLink>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default MobileNavigation;
