import { StyledHamburgerMenu } from "../styles/styles";
import MenuIcon from "@mui/icons-material/Menu";

const MobileNavigation = () => {
  return (
    <StyledHamburgerMenu size="large">
      <MenuIcon fontSize="large" color="warning" />
    </StyledHamburgerMenu>
  );
};

export default MobileNavigation;
