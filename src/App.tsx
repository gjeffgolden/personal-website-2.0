import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
