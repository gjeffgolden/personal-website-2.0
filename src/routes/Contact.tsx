import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import SocialIconRow from "../components/SocialIconRow";
import { PageContainer } from "../styles/styles";

export const Contact = () => {
  return (
    <PageContainer>
      <Typography mb={4} variant="h3">
        Contact
      </Typography>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="32rem"
      >
        <Typography paragraph variant="body1">
          I'd love to hear from you. Whether you want to chat about an exciting
          opportunity, current programming trends, my experience as a frontend
          developer or the results of the most recent F1 race, hit me up at
          codebygolden@gmail.com.
        </Typography>
        <Button
          color="secondary"
          href="mailto:codebygolden@gmail.com"
          sx={{ margin: "1.5rem 0rem 1.5rem 0rem", width: "11rem" }}
          variant="outlined"
        >
          Reach Out
        </Button>
        <SocialIconRow />
      </Box>
    </PageContainer>
  );
};
