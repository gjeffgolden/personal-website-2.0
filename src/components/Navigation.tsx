import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import MobileNavigation from "./MobileNavigation";
import NavigationLinks from "./NavigationLinks";
import { StyledNavigationLink } from "../styles/styles";

const Navigation = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      height="20vh"
    >
      <StyledNavigationLink to="/">GJG</StyledNavigationLink>
      <Hidden mdUp>
        <MobileNavigation />
      </Hidden>
      <Hidden mdDown>
        <NavigationLinks />
      </Hidden>
    </Box>
  );
};

export default Navigation;
