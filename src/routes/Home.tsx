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
      <Typography variant="h1">Hello, world.</Typography>
    </Box>
  );
};
