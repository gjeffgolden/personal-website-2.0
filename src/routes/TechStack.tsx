import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import usePortfolio from "../hooks/usePortfolio";
import { StyledPageContainer } from "../styles/styles";

export const TechStack = () => {
  const {
    handleClickCore,
    handleClickOther,
    handleClickLearning,
    renderCards,
    selectedTab,
    Tabs,
  } = usePortfolio();

  return (
    <StyledPageContainer>
      <Typography mb={4} variant="h3">
        Portfolio
      </Typography>
      <ButtonGroup sx={{ maxWidth: "90vw" }}>
        <Button
          color="secondary"
          onClick={handleClickCore}
          sx={theme => ({
            color: `${
              selectedTab === Tabs.CORE
                ? theme.palette.secondary
                : theme.palette.success.main
            }`,
          })}
        >
          Core Stack
        </Button>
        <Button
          color="secondary"
          onClick={handleClickOther}
          sx={theme => ({
            color: `${
              selectedTab === Tabs.OTHER
                ? theme.palette.secondary
                : theme.palette.success.main
            }`,
          })}
        >
          Other Tech I Like
        </Button>
        <Button
          color="secondary"
          onClick={handleClickLearning}
          sx={theme => ({
            color: `${
              selectedTab === Tabs.LEARNING
                ? theme.palette.secondary
                : theme.palette.success.main
            }`,
          })}
        >
          What I'm Learning
        </Button>
      </ButtonGroup>
      <Box mt={2} justifyContent="center">
        <Grid container spacing={0.5} justifyContent="center">
          {renderCards()}
        </Grid>
      </Box>
    </StyledPageContainer>
  );
};
