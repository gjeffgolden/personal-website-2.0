import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

import { StyledSocialIconsContainer } from "../styles/styles";

const SocialIconRow = () => {
  return (
    <StyledSocialIconsContainer>
      <Link
        href="https://github.com/gjeffgolden"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile (opens in a new tab)"
      >
        <Avatar alt="" src="assets/github-icon.png"></Avatar>
      </Link>
      <Link
        href="https://www.linkedin.com/in/gjeffgolden/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile (opens in a new tab)"
      >
        <Avatar alt="" src="assets/linkedin-icon.jpg"></Avatar>
      </Link>
      <Link
        href="https://www.instagram.com/gjeffgolden/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram profile (opens in a new tab)"
      >
        <Avatar alt="" src="assets/instagram-icon.jpg"></Avatar>
      </Link>
      <Link
        href="https://medium.com/@gjeffgolden"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium profile (opens in a new tab)"
      >
        <Avatar alt="" src="assets/medium-logo.png"></Avatar>
      </Link>
    </StyledSocialIconsContainer>
  );
};

export default SocialIconRow;
