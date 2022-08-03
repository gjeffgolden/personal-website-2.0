import { styled } from "@mui/material";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

export const StyledNavigationLink = styled(Link)({
  fontFamily: "'Press Start 2P'",
  color: "#4dd672",
  padding: 16,
  textDecoration: "none",
  "&:hover": {
    color: "#FFFFFF",
  },
});

export const StyledNavigationGroup = styled("nav")({
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-evenly",
  padding: 12,
});

export const StyledPageContainer = styled(Box)({
  display: "flex",
  flexFlow: "column",
  width: "100vw",
  height: "80vh",
  alignItems: "center",
  justifyContent: "center",
  overflow: "auto",
});

export const StyledParagraphContainer = styled("p")({
  width: "38rem",
});

export const StyledRowContainer = styled("section")({
  display: "flex",
  flexFlow: "row",
  width: "50vw",
  justifyContent: "space-evenly",
  padding: "8px",
});

export const StyledSocialIconsContainer = styled("div")({
  alignItems: "center",
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-evenly",
  marginTop: "1rem",
  width: "14rem",
});
