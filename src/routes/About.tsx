import Avatar from "@mui/material/Avatar";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import {
  StyledPageContainer,
  StyledResponsiveContainer,
} from "../styles/styles";

export const About = () => {
  return (
    <StyledPageContainer>
      <Slide direction="right" in={true}>
        <Typography mb={4} variant="h3">
          About Me
        </Typography>
      </Slide>
      <StyledResponsiveContainer display="flex" flexDirection="row">
        <Slide direction="left" in={true}>
          <Avatar
            alt="Jeff Golden"
            src="assets/Golden-Headshot-Casual.JPG"
            sx={theme => ({
              width: "12rem",
              height: "12rem",
              float: "left",
              padding: "0px 20px 20px 0px",
              [theme.breakpoints.down("sm")]: {
                alignSelf: "center",
              },
            })}
          />
        </Slide>
        <Slide direction="left" in={true}>
          <Typography mt={5} width="34rem" maxWidth="90vw" variant="body1">
            I'm a frontend developer who opted out of a successful career in
            journalism and digital marketing to pursue a lifelong passion for
            computer science. Away from my computer, I'm an avid hiker, climber,
            backpacker, reader, sports fan and wildlife advocate.
          </Typography>
        </Slide>
      </StyledResponsiveContainer>
    </StyledPageContainer>
  );
};
