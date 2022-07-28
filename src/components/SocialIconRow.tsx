import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

import { SocialIconsContainer } from "../styles/styles";

import GitHub from "../assets/github-icon.png";
import Instagram from "../assets/instagram-icon.jpg";
import LinkedIn from "../assets/linkedin-icon.jpg";
import Medium from "../assets/medium-logo.png";

const SocialIconRow = () => {
  return (
    <SocialIconsContainer>
      <Link href="https://github.com/gjeffgolden" target="_blank">
        <Avatar alt="GitHub Logo" src={GitHub}></Avatar>
      </Link>
      <Link href="https://www.linkedin.com/in/gjeffgolden/" target="_blank">
        <Avatar alt="LinkedIn Logo" src={LinkedIn}></Avatar>
      </Link>
      <Link href="https://www.instagram.com/gjeffgolden/" target="_blank">
        <Avatar alt="Instagram Logo" src={Instagram}></Avatar>
      </Link>
      <Link href="https://medium.com/@gjeffgolden" target="_blank">
        <Avatar alt="Medium Logo" src={Medium}></Avatar>
      </Link>
    </SocialIconsContainer>
  );
};

export default SocialIconRow;
