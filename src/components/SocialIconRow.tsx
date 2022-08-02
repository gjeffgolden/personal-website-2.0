import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

import { SocialIconsContainer } from "../styles/styles";

const SocialIconRow = () => {
  return (
    <SocialIconsContainer>
      <Link href="https://github.com/gjeffgolden" target="_blank">
        <Avatar alt="GitHub Logo" src="/github-icon.png"></Avatar>
      </Link>
      <Link href="https://www.linkedin.com/in/gjeffgolden/" target="_blank">
        <Avatar alt="LinkedIn Logo" src="/linkedin-icon.jpg"></Avatar>
      </Link>
      <Link href="https://www.instagram.com/gjeffgolden/" target="_blank">
        <Avatar alt="Instagram Logo" src="/instagram-icon.jpg"></Avatar>
      </Link>
      <Link href="https://medium.com/@gjeffgolden" target="_blank">
        <Avatar alt="Medium Logo" src="/medium-logo.png"></Avatar>
      </Link>
    </SocialIconsContainer>
  );
};

export default SocialIconRow;
