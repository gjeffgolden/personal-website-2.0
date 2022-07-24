import Box from "@mui/material/Box";
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
        <Typography variant="subtitle1">Hi, my name is...</Typography>
        <Typography variant="h1">Jeff Golden</Typography>
        <Typography variant="h4">
          Frontend Developer | Writer | Adventurer
        </Typography>
        <Typography variant="body1">
          This is going to be a longer paragraph with a bunch of info.
        </Typography>
      </Box>
    </Box>
  );
};
