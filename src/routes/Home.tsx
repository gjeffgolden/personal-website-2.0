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
            This is going to be a longer paragraph with a bunch of info.
          </Typography>
        </ParagraphContainer>
        <Button
          href="https://github.com/gjeffgolden"
          variant="outlined"
          color="secondary"
          target="_new"
        >
          GitHub
        </Button>
      </Box>
    </PageContainer>
  );
};
