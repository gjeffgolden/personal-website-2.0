import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

import { StyledSocialIconsContainer } from "../styles/styles";

const SocialIconRow = () => {
  return (
    <StyledSocialIconsContainer>
      <Link href="https://github.com/gjeffgolden" target="_blank">
        <Avatar alt="GitHub Logo" src="assets/github-icon.png"></Avatar>
      </Link>
      <Link href="https://www.linkedin.com/in/gjeffgolden/" target="_blank">
        <Avatar alt="LinkedIn Logo" src="assets/linkedin-icon.jpg"></Avatar>
      </Link>
      <Link href="https://www.instagram.com/gjeffgolden/" target="_blank">
        <Avatar alt="Instagram Logo" src="assets/instagram-icon.jpg"></Avatar>
      </Link>
      <Link href="https://medium.com/@gjeffgolden" target="_blank">
        <Avatar alt="Medium Logo" src="assets/medium-logo.png"></Avatar>
      </Link>
    </StyledSocialIconsContainer>
  );
};

export default SocialIconRow;
