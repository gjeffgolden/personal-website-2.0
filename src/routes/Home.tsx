import TypewriterComponent from "typewriter-effect";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  StyledPageContainer,
  StyledParagraphContainer,
} from "../styles/styles";

export const Home = () => {
  return (
    <StyledPageContainer>
      <Box maxWidth="90vw">
        <Typography variant="subtitle1" component="p" color="secondary">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString("Hi, my name is...").start();
            }}
          />
        </Typography>
        <Typography variant="h1">Jeff Golden</Typography>
        <Typography variant="h4" component="h2" color="orange">
          Engineering Manager | Full-Stack Developer
        </Typography>
        <StyledParagraphContainer>
          <Typography variant="subtitle2" component="p">
            “Everything is held together with stories. That is all that is
            holding us together, stories and compassion.” -Barry Lopez
          </Typography>
        </StyledParagraphContainer>
        <Button
          color="secondary"
          href="https://github.com/gjeffgolden"
          size="large"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
          variant="outlined"
        >
          GitHub
        </Button>
      </Box>
    </StyledPageContainer>
  );
};
