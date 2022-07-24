import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationLink = styled(Link)(theme => ({
  fontFamily: "'Press Start 2P'",
  padding: 8,
}));

export const NavigationGroup = styled("nav")({
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-evenly",
  padding: 12,
});
