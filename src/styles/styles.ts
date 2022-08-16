import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export const StyledFigCaption = styled("figcaption")({
  textAlign: "center",
  fontFamily: "Source Code Pro",
  fontWeight: 400,
});

export const StyledHamburgerMenu = styled(IconButton)({
  padding: 16,
  margin: 12,
  color: "#FFFFFF",
});

export const StyledNavigationLink = styled(Link)({
  fontFamily: "'Press Start 2P'",
  color: "#4dd672",
  padding: 16,
  margin: 12,
  textDecoration: "none",
  "&:hover": {
    color: "#FFFFFF",
  },
});

export const StyledNavigationLinkWithBorder = styled(Link)({
  color: "#4dd672",
  border: "0.1rem solid #4dd672",
  fontFamily: "'Press Start 2P'",
  height: "1.5rem",
  padding: 14,
  margin: 12,
  textDecoration: "none",
  "&:hover": {
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
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

export const StyledParagraphContainer = styled("section")({
  width: "38rem",
  padding: "1rem 0rem 1rem 0rem",
});

export const StyledRowContainer = styled("section")({
  display: "flex",
  flexFlow: "row",
  width: "60vw",
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
