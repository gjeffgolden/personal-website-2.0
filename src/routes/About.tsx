import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageContainer } from "../styles/styles";

export const About = () => {
  return (
    <PageContainer>
      <Typography mb={4} variant="h3">
        About Me
      </Typography>
      <Box display="flex" flexDirection="row">
        <Avatar
          alt="Jeff Golden"
          src="/src/assets/Golden-Headshot-Casual.JPG"
          sx={{
            width: "16rem",
            height: "16rem",
            float: "left",
            padding: "0px 20px 20px 0px",
          }}
        />
        <Typography mt={8} width="42rem" variant="body2">
          I'm a frontend developer who opted out of a successful career in
          journalism and digital marketing to pursue a lifelong passion for
          computer science. Away from my computer, I'm an avid hiker, climber,
          backpacker, reader, sports fan and wildlife advocate.
        </Typography>
      </Box>
    </PageContainer>
  );
};
