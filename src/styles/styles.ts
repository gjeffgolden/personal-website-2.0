import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationLink = styled(Link)({
  fontFamily: "'Press Start 2P'",
  color: "#4dd672",
  padding: 8,
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
