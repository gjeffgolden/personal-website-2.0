import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageContainer } from "../styles/styles";

export const About = () => {
  return (
    <PageContainer>
      <Typography variant="h5">About Me</Typography>
      <Box>
        <Avatar
          alt="Jeff Golden"
          src="/src/assets/Golden-Headshot-Casual.JPG"
          sx={{ width: "16rem", height: "16rem" }}
        />
      </Box>
    </PageContainer>
  );
};
