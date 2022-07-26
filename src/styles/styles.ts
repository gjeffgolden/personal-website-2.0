import { styled } from "@mui/material";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

export const NavigationLink = styled(Link)({
  fontFamily: "'Press Start 2P'",
  color: "#4dd672",
  padding: 16,
  textDecoration: "none",
  "&:hover": {
    color: "#FFFFFF",
  },
});

export const NavigationGroup = styled("nav")({
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-evenly",
  padding: 12,
});

export const PageContainer = styled(Box)({
  display: "flex",
  flexFlow: "column",
  width: "100vw",
  height: "80vh",
  alignItems: "center",
  justifyContent: "center",
  overflow: "auto",
});

export const ParagraphContainer = styled("p")({
  width: "38rem",
});
