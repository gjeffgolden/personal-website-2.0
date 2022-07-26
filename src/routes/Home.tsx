import TypewriterComponent from "typewriter-effect";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { PageContainer, ParagraphContainer } from "../styles/styles";

export const Home = () => {
  return (
    <PageContainer>
      <Box>
        <Typography variant="subtitle1" color="secondary">
          <TypewriterComponent
            onInit={typewriter => {
              typewriter.typeString("Hi, my name is...").start();
            }}
          />
        </Typography>
        <Typography variant="h1">Jeff Golden</Typography>
        <Typography variant="h4">
          Frontend Developer | Writer | Expert Googler
        </Typography>
        <ParagraphContainer>
          <Typography variant="subtitle2">
            “Everything is held together with stories. That is all that is
            holding us together, stories and compassion.” -Barry Lopez
          </Typography>
        </ParagraphContainer>
        <Button
          color="secondary"
          href="https://github.com/gjeffgolden"
          size="large"
          target="_new"
          variant="outlined"
        >
          GitHub
        </Button>
      </Box>
    </PageContainer>
  );
};
