import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StyledPageContainer } from "../styles/styles";

export const About = () => {
  return (
    <StyledPageContainer>
      <Typography mb={4} variant="h3">
        About Me
      </Typography>
      <Box display="flex" flexDirection="row">
        <Avatar
          alt="Jeff Golden"
          src="assets/Golden-Headshot-Casual.JPG"
          sx={{
            width: "12rem",
            height: "12rem",
            float: "left",
            padding: "0px 20px 20px 0px",
          }}
        />
        <Typography mt={5} width="34rem" variant="body1">
          I'm a frontend developer who opted out of a successful career in
          journalism and digital marketing to pursue a lifelong passion for
          computer science. Away from my computer, I'm an avid hiker, climber,
          backpacker, reader, sports fan and wildlife advocate.
        </Typography>
      </Box>
    </StyledPageContainer>
  );
};
