import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="subtitle1" color="secondary">
          Hi, my name is...
        </Typography>
        <Typography variant="h1">Jeff Golden</Typography>
        <Typography variant="h4">
          Frontend Developer | Writer | Adventurer
        </Typography>
        <p>
          <Typography variant="subtitle2">
            This is going to be a longer paragraph with a bunch of info.
          </Typography>
        </p>
        <Button variant="outlined" color="secondary">
          GitHub
        </Button>
      </Box>
    </Box>
  );
};
